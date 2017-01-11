using KSJ.FTPClient.Core.LocalFileSystem;
using Microsoft.AspNetCore.SignalR;

namespace KSJ.FTPClient.Core.Hubs
{
    public class LocalFileSystemHub : Hub
    {
        private readonly LocalFileSystemMonitor _monitor;

        public LocalFileSystemHub(LocalFileSystemMonitor monitor)
        {
            _monitor = monitor;
        }

        public void AddFolderWatch(string path)
        {
            _monitor.WatchFolder(path);
        }
    }
}
