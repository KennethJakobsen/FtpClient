using System.Threading;
using KSJ.FTPClient.Core.LocalFileSystem;
using Microsoft.AspNetCore.SignalR;

namespace KSJ.FTPClient.Core.Hubs
{
    public class TimeHub : Hub
    {
        private readonly ICreateFile _file;

        public TimeHub(ICreateFile file)
        {
            _file = file;
        }
    }
}
