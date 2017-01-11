using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Reflection;
using System.Threading.Tasks;
using KSJ.FTPClient.Core.Model;

namespace KSJ.FTPClient.Core.LocalFileSystem
{
    public class LocalFileSystemRepository : IHandleLocalFilesystem
    {
        private readonly ICreateFolder _folderFactory;
        private readonly ICreateFile _fileFactory;
        private readonly LocalFileSystemMonitor _monitor;

        public LocalFileSystemRepository(ICreateFolder folderFactory, ICreateFile fileFactory, LocalFileSystemMonitor monitor)
        {
            _folderFactory = folderFactory;
            _fileFactory = fileFactory;
            _monitor = monitor;
        }

        public IEnumerable<IFileSystemEntry> GetInitialFolderEntries()
        {
            var currentFolder = Directory.GetCurrentDirectory();
            _monitor.WatchFolder(currentFolder);
            var folders = Directory.GetDirectories(currentFolder);
            var ret = folders.Select(f => _folderFactory.Create(f)).Cast<IFileSystemEntry>().ToList();
            var files = Directory.GetFiles(currentFolder);
            ret.AddRange(files.Select(f => _fileFactory.Create(f)).Cast<IFileSystemEntry>());

            return ret;
        }

        public IEnumerable<IFileSystemEntry> GetFolderEntries(string folder)
        {
            _monitor.WatchFolder(folder);
            var folders = Directory.GetDirectories(folder);
            var ret = folders.Select(f => _folderFactory.Create(f)).Cast<IFileSystemEntry>().ToList();
            var files = Directory.GetFiles(folder);
            ret.AddRange(files.Select(f => _fileFactory.Create(f)).Cast<IFileSystemEntry>());

            return ret;
        }
    }
}
