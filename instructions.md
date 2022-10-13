# Instructions  

This branch contains a copy of the code from the `wrongs-example` branch. You can find details on the project and how to run it [here](./project-instructions.md).

Build out the API, adding more routes (listed below) that interact with the database.

## Structure

For this activity, work on your own.

## API routes

The following table lists possible routes in order of ascending complexity. Start by implementing the first one, and then work your way through the list. You don't need to finish all of them; build as many as you have time to do properly.

| Route | Method | Function |
| --- | --- | --- |
| `/people` | `GET` | Return a list of people |
| `/wrongs/:id` | `GET` | Get the details of a specific wrong |
| `/wrongs` | `POST` | Add a new wrong to the database |
| `/people` | `POST` | Add a new person to the database |
| `/wrongs/:id` | `DELETE` | Remove a wrong from the database |
| `/wrongs/:id` | `PATCH` | Update a wrong, changing its details in some way |
| `/stats` | `GET` | Return a summary of all the wrongs in the database |
| `/stats/:id` | `GET` | Return a summary of all the wrongs related to a specific person |
| `/stats/people` | `GET` | Return a summary of all relevant wrongs for each person |
| `/people/:id` | `DELETE` | Remove a person from the database |

The exact implementation details of each branch (e.g. what exactly does a summary look like?) are up to you.

## Guidance

- This is an **independent** task, but that doesn’t mean you can’t ask for help; it just means that each person is building their own unique app.
- This task is focused entirely on the **back-end**; no HTML/CSS is needed at all. Focus on the server.
- Handle one route at a time, making sure it's working before moving on to the next.

---

[Back](./README.md)

---
