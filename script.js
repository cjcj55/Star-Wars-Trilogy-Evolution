/**
 * TIMELINE
 */

    // Sample data for the timeline
    const timelineData = new vis.DataSet([
        { id: 1, content: 'Episode IV: A New Hope', start: '1977-05-25',
            cast: 'Mark Hamill, Harrison Fort, Carrie Fisher, Peter Cushing, Alec Guinness, David Prowse, James Earl Jones, Anthony Daniels, Kenny Baker, Peter Mayhew' },
        { id: 2, content: 'Episode V: The Empire Strikes Back', start: '1980-05-21',
            cast: 'Mark Hamill, Harrison Fort, Carrie Fisher, Billy Dee Williams, Anthony Daniels, David Prowse, Kenny Baker, Peter Mayhew, Frank Oz'},
        { id: 3, content: 'Episode VI: Return of the Jedi', start: '1983-05-25',
            cast: 'Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels, David Prowse, Kenny Baker, Peter Mayhew, Frank Oz' },
        { id: 4, content: 'Episode I: The Phantom Menace', start: '1999-05-19',
            cast: 'Liam Neeson, Ewam McGregor, Natalie Portman, Jake Lloyd, Ahmed Best, Ian McDiarmid, Anthony Daniels, Kenny Baker, Pernilla August, Frank Oz' },
        { id: 5, content: 'Episode II: Attack of the Clones', start: '2002-05-16',
            cast: 'Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid, Samuel L. Jackson, Christopher Lee, Anthony Daniels, Kenny Baker, Frank Oz, Temuera Morrison, Silas Carson, Jimmy Smits' },
        { id: 6, content: 'Episode III: Revenge of the Sith', start: '2005-05-19',
            cast: 'Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid, Samuel L. Jackson, Christopher Lee, Anthony Daniels, Kenny Baker, Frank Oz' },
        { id: 7, content: 'Episode VII: The Force Awakens', start: '2015-12-18',
            cast: 'Harrison Fort, Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Lupita Nyong\'o, Andy Serkis, Domhnall Gleeson, Anthony Daniels, Peter Mayhew, Max von Sydow' },
        { id: 8, content: 'Episode VIII: The Last Jedi', start: '2017-12-15',
            cast: 'Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Andy Serkis, Lupita Nyong\'o, Domhnall Gleeson, Anthony Daniels, Gwendoline Christie, Kelly Marie Tran, Laura Dern, Benicio del Toro' },
        { id: 9, content: 'Episode IX: The Rise of Skywalker', start: '2019-12-20',
            cast: 'Carrie Fisher, Mark Hamill, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Anthony Daniels, Naomi Ackie, Domhnall Gleeson, Richard E. Grant, Lupita Nyong\'o, Keri Russell, Joonas Suotamo, Kelly Marie Tran, Ian McDiarmid, Billy Dee Williams' }
    ]);
    
    // Create a timeline
    const container = document.getElementById('timeline');
    const options = {
        start: '1970-01-01', // Start year for the timeline
        end: '2023-01-01',   // End year for the timeline
    };
    const timeline = new vis.Timeline(container, timelineData, options);

/**
 * TIMELINE MOVIE DETAILS
 */
    // Get the movie details container
    const movieDetailsContainer = document.getElementById('movie-details-container');

    // Function to display movie details
    function displayMovieDetails(movieId) {
        const movie = timelineData.get(movieId);
        if (movie) {
        const detailsHtml = `
            <h3>${movie.content}</h3>
            <p><b>Release Date: </b>${movie.start}</p>
            <p><b>Cast: </b>${movie.cast}</p>
        `;
        movieDetailsContainer.innerHTML = detailsHtml;
        }
    }
    
    // Add a click event listener to the timeline items
    timeline.on('click', (properties) => {
        if (properties.item) {
        displayMovieDetails(properties.item);
        }
    });