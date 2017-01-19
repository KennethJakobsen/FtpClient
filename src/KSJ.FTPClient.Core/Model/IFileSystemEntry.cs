using System;

namespace KSJ.FTPClient.Core.Model
{
    public interface IFileSystemEntry
    {
        string Name { get; set; }
        string Path { get; set; }
        bool IsFile { get; }
        DateTime LastEdited { get; set; }
    }
}
