using KSJ.FTPClient.Core.Hubs;
using KSJ.FTPClient.Core.Messages;
using Microsoft.AspNetCore.SignalR.Infrastructure;

namespace KSJ.FTPClient.Core.LocalFileSystem
{
    public class LocalFileSystemChangedNotifier : INotifyLocalFileSystemClient
    {
        private readonly IConnectionManager _connectionManager;

        public LocalFileSystemChangedNotifier(IConnectionManager connectionManager)
        {
            _connectionManager = connectionManager;
        }
        public void NotifyFolderUpdate(FileSystemChangedMessage msg)
        {
            _connectionManager.GetHubContext<LocalFileSystemHub>().Clients.All.publishFolderUpdated(msg);
        }
    }
}
