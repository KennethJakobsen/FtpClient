using KSJ.FTPClient.Core.Messages;

namespace KSJ.FTPClient.Core.LocalFileSystem
{
    public interface INotifyLocalFileSystemClient
    {
        void NotifyFolderUpdate(FileSystemChangedMessage msg);
    }
}
