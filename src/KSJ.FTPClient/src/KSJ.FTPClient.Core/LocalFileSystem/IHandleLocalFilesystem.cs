using System.Collections.Generic;
using KSJ.FTPClient.Core.Model;

namespace KSJ.FTPClient.Core.LocalFileSystem
{
    public interface IHandleLocalFilesystem
    {
        IEnumerable<IFileSystemEntry> GetInitialFolderEntries();
        IEnumerable<IFileSystemEntry> GetFolderEntries(string folder);
    }
}