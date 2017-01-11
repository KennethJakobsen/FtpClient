using System.IO;

namespace KSJ.FTPClient.Core.LocalFileSystem
{
    public interface ICreateFileSystemWatcher
    {
        FileSystemWatcher Create(string folder);
    }
}