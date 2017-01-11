namespace KSJ.FTPClient.Core.LocalFileSystem
{
    public interface INotifyLocalFileSystemClient
    {
        void NotifyFolderUpdate(string path);
    }
}
