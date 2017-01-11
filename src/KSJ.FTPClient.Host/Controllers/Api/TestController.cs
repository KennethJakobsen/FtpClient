using System;
using System.Threading;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.SignalR.Infrastructure;
using KSJ.FTPClient.Core.Hubs;

namespace KSJ.FTPClient.Host.Controllers.Api
{
    public class TestController : ApiController
    {
        private readonly IConnectionManager _manager;

        public TestController(IConnectionManager manager)
        {
            _manager = manager;
        }

        [HttpPost]
        public void TriggerTimeUpdate()
        {
            while (true)
            {
                _manager?.GetHubContext<TimeHub>().Clients.All.publishTime(DateTime.Now);
                Thread.Sleep(50);
            }
            
        }
    }
}
