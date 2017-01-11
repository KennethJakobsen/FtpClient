using KSJ.FTPClient.Core.Hubs;
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
        public void NotifyFolderUpdate(string path)
        {
            _connectionManager.GetHubContext<LocalFileSystemHub>().Clients.All.publishFolderUpdated(path);
        }
    }
}
