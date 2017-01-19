using System;
using System.IO;
using KSJ.FTPClient.Core.Extensions.FileSystem;
using KSJ.FTPClient.Core.Messages;
using KSJ.FTPClient.Core.Model;

namespace KSJ.FTPClient.Core.LocalFileSystem
{
    public class LocalFileSystemChangedMessageFactory
    {
        public FileSystemChangedMessage Create(string watchedFolder, string entryPath, WatcherChangeTypes type, string originalPath = null)
        {
            var op = originalPath ?? entryPath;
            ChangeType ct;
            switch (type)
            {
                case WatcherChangeTypes.All:
                    ct = ChangeType.Changed;
                    break;
                case WatcherChangeTypes.Changed:
                    ct = ChangeType.Changed;
                    break;
                case WatcherChangeTypes.Created:
                    ct = ChangeType.Created;
                    break;
                case WatcherChangeTypes.Deleted:
                    ct = ChangeType.Deleted;
                    break;
                case WatcherChangeTypes.Renamed:
                    ct = ChangeType.Renamed;
                    break;
                default:
                    throw new ArgumentOutOfRangeException(nameof(type), type, null);
            }
            IFileSystemEntry entry;
            if (ct != ChangeType.Deleted && Directory.Exists(entryPath))
                entry = new DirectoryInfo(entryPath).ToFolder();
            else if(ct == ChangeType.Deleted)
                entry = new Model.File() { Path =  entryPath};
            else
                entry = new FileInfo(entryPath).ToFile();
            return new FileSystemChangedMessage()
            {
                ChangedEntry = entry,
                EventType = ct,
                WatchedFolder = watchedFolder,
                OriginalPath = op
            };

        }
    }
}
