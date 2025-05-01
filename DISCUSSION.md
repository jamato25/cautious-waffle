### Glaring issues/ Easy fixes

- [x] Remove getElementById
- [x] Remove console logs on the browser and especially the log with environment variables
- [] Add node version and postgres version
- [x] Fix FE hydration issue with table
- [x] Fix searching error -> This can just be fixed when I move filtering to the db
- [] There is no typing even though these are ts files
- [x] Using line breaks instead of css spacing
- [x] Inline styling, no classes (Used MUI here to save time but whatever the styling framework is would work)

### Improvement ideas

- [x] Set up service or custom hooks to improve data fetching structure
- [x] Filter using the database instead of the front end
- [] Add better error logging. Replace console.errors with Pino or other logging library
- [] Add testing framework

### UI Improvements

- [x] Loader for searching, filtering a data loading
- [x] Bring in a Table component from a library (MUI)
- [x] Search bar styling
- [x] Title and page layout
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

### Improvements with more time

- Add in theme color to make the page more aesthetic
- Phone number formatting
- Pagination and filtering
- Add in skeleton for loading so there is less content shifting
- Add in a component for when no advocates are found after filtering. Right now it looks a bit blank
- More responsive design. This works but for now but needs to be improved for mobile views.
- Update schema to have a n:n Specialty table.
