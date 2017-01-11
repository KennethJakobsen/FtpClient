using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;

namespace KSJ.FTPClient.Core.LocalFileSystem
{
    public class FileSystemWatcherFactory : ICreateFileSystemWatcher
    {
        public FileSystemWatcherFactory()
        {
            
        }

        public FileSystemWatcher Create(string folder)
        {
            return new FileSystemWatcher(folder)
            {
                IncludeSubdirectories = false
            };
        } 
    }
}
