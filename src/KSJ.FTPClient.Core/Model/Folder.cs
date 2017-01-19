using System;

namespace KSJ.FTPClient.Core.Model
{
    public class Folder : IFileSystemEntry
    {
        public Folder()
        {
            IsFile = false;
        }
        public string Name { get; set; }
        public string Path { get; set; }
        public bool IsFile { get; private set; }
        public DateTime LastEdited { get; set; }
    }
}
