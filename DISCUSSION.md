### Glaring issues/ Easy fixes

- [] Remove getElementById
- [] Remove console logs on the browser and especially the log with environment variables
- [] Add node version and postgres version
- [] Fix FE hydration issue with table
- [] Fix searching error -> This can just be fixed when I move filtering to the db
- [] There is no typing even though these are ts files

### Improvement ideas

- [] Set up service or custom hooks to improve data fetching structure
- [] Filter using the database instead of the front end
- [] Add better error logging. Replace console.errors with Pino or other logging library
- [] Add testing framework

### UI Improvements

- [] Loader for searching, filtering a data loading
- [] Bring in a Table component from a library for sorting, aesthetic and column movement (MUI)
- [] Search bar styling
- [] Title and page layout
- [] Add filtering capability. Could be good to have a filter drawer or something similar. - I think this is important for this application because usually people need a specific kind of doctor. They are probably not browsing.
- [] Add pagination

### Things to think about

Database schema:

- Payload is a confusing name for the specialties field. Not sure why it was renamed.
- I don't love how the specialties are stored here. I would think it would be better to have another table to store data related to specialty.
  I see that a lot of these specialties are repeating so it would make sense to do a n:n relationship table
- Phone numbers here are only US numbers looks like. I believe Solace operates just in the US right now but accounting for international numbers
  early on would be an easy change and would solve a lot of migration headache if expanding to other countries.
- There is definitely other data I would think about storing:
  - State or full address (in an address table) -> Especially with Health Care bc insurance changes by state I would think it could be useful in the future.
  - Degree doesn't have much meaning to me. Maybe explain in the UI why this is important?
    - I think University/ Medical School is probably a more accessible data point for most people
    - Could change this to level of education? Something that makes it easier to understand
- Advocates should have an updatedAt field.
