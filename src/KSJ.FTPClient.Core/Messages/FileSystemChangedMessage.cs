using KSJ.FTPClient.Core.Model;

namespace KSJ.FTPClient.Core.Messages
{
    public enum ChangeType { Changed = 0, Renamed = 1, Deleted = 2, Created = 3}
    public class FileSystemChangedMessage
    {
        public string WatchedFolder { get; set; }
        public string OriginalPath { get; set; }
        public IFileSystemEntry ChangedEntry { get; set; }
        public ChangeType EventType { get; set; }
    }
}
