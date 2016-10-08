using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Dal.Entities;

namespace Dal
{
    public class ContactsDB :DbContext
    {
		public ContactsDB (): base("name=ContactsDB")
		{}
		public DbSet<Contact> Contacts { get; set; }
	}
}
