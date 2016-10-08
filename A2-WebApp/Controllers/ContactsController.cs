using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Dal;
using Dal.Entities;

// For more information on enabling Web API for empty projects, visit http://go.microsoft.com/fwlink/?LinkID=397860

namespace Torax.WebServer.Controllers
{
    [Route("api/[controller]")]
    public class ContactsController : Controller
    {
		private List<Contact> getContacts()
		{
			using (var db = new ContactsDB())
			{
				return db.Contacts.ToList();
			}
		}

		private Contact getContact(int id)
		{
			using (var db = new ContactsDB())
			{
				return db.Contacts.Find(id);
			}
		}

        // GET: api/values
        [HttpGet]
        public IActionResult Get()
        {
			try
			{
				return Ok(getContacts());
			}
			catch (Exception ex)
			{
				return new ObjectResult(ex);
			}
			
        }

        // GET api/values/5
        //[Route("{Details}/{id:int}")]
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
			var result = getContact(id);
			if (result != null)
				return Ok(result);
			else
				return NotFound();
        }


        // POST api/values
        [HttpPost]
        public async Task<IActionResult> Post([FromBody]Contact contact)
        {
			using (var db = new ContactsDB())
			{
				if (contact == null || TryValidateModel(contact))
					return BadRequest(ModelState);

				db.Contacts.Add(contact);
				db.SaveChanges();
				return Created("", contact.ContactID);
			}
        }

		// PUT api/values/5
		[HttpPut("{id}")]
		public async Task<IActionResult> Put(int id, [FromBody]Contact contact)
		{
			using (var db = new ContactsDB())
			{
				var c = db.Contacts.Find(contact.ContactID);

				if (c == null)
					return NotFound();

				db.Entry(c).CurrentValues.SetValues(contact);
				db.SaveChanges();
				return Ok();

				//new BodyModelBinder().BindModelAsync();
				if (await base.TryUpdateModelAsync(c))
				{
					
				}
				else
					return BadRequest(ModelState);
			}
		}

		// DELETE api/values/5
		[HttpDelete("{id}")]
        public void Delete(int id)
        {
        }
    }
}
