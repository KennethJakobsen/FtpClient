﻿using System.Collections.Generic;
using System.IO;
using System.Linq;

namespace KSJ.FTPClient.Core.LocalFileSystem
{
    public class LocalFileSystemMonitor
    {
        private readonly ICreateFileSystemWatcher _watcherFactory;
        private readonly INotifyLocalFileSystemClient _notification;
        private List<FileSystemWatcher> _watchers;

        public LocalFileSystemMonitor(ICreateFileSystemWatcher watcherFactory, INotifyLocalFileSystemClient notification)
        {
            _watcherFactory = watcherFactory;
            _notification = notification;
            _watchers = new List<FileSystemWatcher>();
        }

        public void WatchFolder(string folder)
        {
            if (_watchers.Any(w => w.Path == folder)) return;
            var watcher = _watcherFactory.Create(folder);
            watcher.Changed += Watcher_Changed;
            watcher.Created += Watcher_Changed;
            watcher.Deleted += Watcher_Changed;
            watcher.Renamed += Watcher_Changed;

            _watchers.Add(watcher);
        }

        private void Watcher_Changed(object sender, FileSystemEventArgs e)
        {

            var attr = File.GetAttributes(e.FullPath);
            if ((attr & FileAttributes.Directory) == FileAttributes.Directory)
            {
                var di = new DirectoryInfo(e.FullPath);
                _notification.NotifyFolderUpdate(di.Parent.FullName);
            }
            else
            {
                var di = new FileInfo(e.FullPath);
                _notification.NotifyFolderUpdate(di.Directory.FullName);
            }

        }
    }
}
