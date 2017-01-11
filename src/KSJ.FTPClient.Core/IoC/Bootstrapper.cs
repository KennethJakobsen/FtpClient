using KSJ.FTPClient.Core.LocalFileSystem;
using LightInject;

namespace KSJ.FTPClient.Core.IoC
{
    public class Bootstrapper
    {
        public IServiceContainer Container { get; set; }
        public Bootstrapper()
        {
            Container = new ServiceContainer();
        }

        public void Bootstrap()
        {
            Container.Register<ICreateFile, FileFactory>()
                .Register<ICreateFolder, FolderFactory>()
                .Register<IHandleLocalFilesystem, LocalFileSystemRepository>()
                .Register<ICreateFileSystemWatcher, FileSystemWatcherFactory>()
                .Register<LocalFileSystemMonitor>(new PerContainerLifetime())
                .Register<INotifyLocalFileSystemClient, LocalFileSystemChangedNotifier>();
            
            
        }
    }
}
