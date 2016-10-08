using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Dal.Entities
{
    public class Contact
    {
		[Key, DatabaseGenerated(DatabaseGeneratedOption.Identity)]
		public int ContactID { get; set; }

		public string LastName { get; set; }

		public string FirstName { get; set; }
	}
}
