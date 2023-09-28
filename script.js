/**
 * TIMELINE
 */
    const timelineData = new vis.DataSet([
        { id: 1, content: 'Episode IV: A New Hope', start: '1977-05-25', group: 'main',
            cast: 'Mark Hamill, Harrison Fort, Carrie Fisher, Peter Cushing, Alec Guinness, David Prowse, James Earl Jones, Anthony Daniels, Kenny Baker, Peter Mayhew',
            cinematic: 'Groundbreaking use of practical effects and miniatures to create realistic spacecraft battles.',
            visual: 'iconic costume designs, including Darth Vader\'s helmet and cape.',
            tech: 'Innovations in visual effects, including the use of stop-motion animation, motion control cameras and matte paintings.'},
        { id: 2, content: 'Episode V: The Empire Strikes Back', start: '1980-05-21', group: 'main',
            cast: 'Mark Hamill, Harrison Fort, Carrie Fisher, Billy Dee Williams, Anthony Daniels, David Prowse, Kenny Baker, Peter Mayhew, Frank Oz', 
            cinematic: 'Expansion of the Star Wars universe with new locations like Hoth and Cloud City.',
            visual: 'Introduction of iconic characters like Yoda and Boba Fett.',
            tech: 'Improved puppetry for Yoda, advancements in animatronics for creating creatures, and enhanced stop-motion animation.'},
        { id: 3, content: 'Episode VI: Return of the Jedi', start: '1983-05-25', group: 'main',
            cast: 'Mark Hamill, Harrison Ford, Carrie Fisher, Billy Dee Williams, Anthony Daniels, David Prowse, Kenny Baker, Peter Mayhew, Frank Oz',
            cinematic: 'Epic space and ground battles, including the Battle of Endor.',
            visual: 'The creation of the Ewoks and the Emperor\s throne room.',
            tech: 'Further developments in practical effects and puppetry.  Continued use of models and matte paintings.'},
        { id: 4, content: 'Episode I: The Phantom Menace', start: '1999-05-19', group: 'main',
            cast: 'Liam Neeson, Ewam McGregor, Natalie Portman, Jake Lloyd, Ahmed Best, Ian McDiarmid, Anthony Daniels, Kenny Baker, Pernilla August, Frank Oz',
            cinematic: 'Introduced advanced CGI technology for more elaborate and expansive worlds.',
            visual: 'The podrace sequence and the Gungan city of Otoh Gunga.',
            tech: 'Pioneered the use of digital characters and environments on a large scale.'},
        { id: 5, content: 'Episode II: Attack of the Clones', start: '2002-05-16', group: 'main',
            cast: 'Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid, Samuel L. Jackson, Christopher Lee, Anthony Daniels, Kenny Baker, Frank Oz, Temuera Morrison, Silas Carson, Jimmy Smits',
            cinematic: 'Larger-scale battles and action sequences, including the Battle of Geonosis.',
            visual: 'The introduction of the clone troopers and various new planets.',
            tech: 'Enhanced CGI capabilities and the use of digital doubles for actors.'},
        { id: 6, content: 'Episode III: Revenge of the Sith', start: '2005-05-19', group: 'main',
            cast: 'Ewan McGregor, Natalie Portman, Hayden Christensen, Ian McDiarmid, Samuel L. Jackson, Christopher Lee, Anthony Daniels, Kenny Baker, Frank Oz',
            cinematic: 'Dark and intense visual style, particularly during Anakin\'s transformation into Darth Vader',
            visual: 'Dramatic lightsaber duels and the creation of Mustafar.',
            tech: 'Improved CGI, motion-capture technology for Yoda\'s fights, and advancements in visual effects.'},
        { id: 7, content: 'Episode VII: The Force Awakens', start: '2015-12-18', group: 'main',
            cast: 'Harrison Fort, Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Lupita Nyong\'o, Andy Serkis, Domhnall Gleeson, Anthony Daniels, Peter Mayhew, Max von Sydow',
            cinematic: 'A return to practical effects and real sets, emphasizing the visual style of the original trilogy.',
            visual: 'Introduction of new characters, such as Rey and Kylo Ren.',
            tech: 'Blend of practical and digital effects for a modern yet nostalgic look.'},
        { id: 8, content: 'Episode VIII: The Last Jedi', start: '2017-12-15', group: 'main',
            cast: 'Mark Hamill, Carrie Fisher, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Andy Serkis, Lupita Nyong\'o, Domhnall Gleeson, Anthony Daniels, Gwendoline Christie, Kelly Marie Tran, Laura Dern, Benicio del Toro',
            cinematic: 'Innovative cinematography and visual storytelling, especially in space battles.',
            visual: 'Development of character arcs for Rey, Kylo Ren, and Finn.',
            tech: 'Continuation of the blend of practical and digital effects, with enhancements in creature design and effects work.'},
        { id: 9, content: 'Episode IX: The Rise of Skywalker', start: '2019-12-20', group: 'main',
            cast: 'Carrie Fisher, Mark Hamill, Adam Driver, Daisy Ridley, John Boyega, Oscar Isaac, Anthony Daniels, Naomi Ackie, Domhnall Gleeson, Richard E. Grant, Lupita Nyong\'o, Keri Russell, Joonas Suotamo, Kelly Marie Tran, Ian McDiarmid, Billy Dee Williams',
            cinematic: 'Epic conclusion with massive fleet battles and lightsaber duels.',
            visual: 'Resolution of character arcs and the return of classic characters.',
            tech: 'Utilized the latest CGI advancements and practical effects to deliver a visually stunning and emotionally resonant conclusion.'}
    ]);

    const today = new Date();
    const additionalData = new vis.DataSet([
        { id: 10, content: 'Silent Film Era', start: '1890-01-01', end: '1929-01-01', group: 'additional', className: 'cinematic-advancements', 
            items: '<p><b>Thomas Edison\'s Kinetoscope (1891):</b> Edison\'s invention allowed for the viewing of short, silent films through a peephole, setting the state for motion picture technology.</p>' +
                    '<p><b>Limiere Brothers\' Cinematographe (1895):</b> This portable film projector and camera enabled public screenings and is often credited as the birth of cinema.</p>' +
                    '<p><b>Intertitles:</b> Silent films relied on text-based intertitles to convey dialogue and narrative to the audience.</p>' +
                    '<p><b>Hand-cranked Cameras:</b> Early film cameras required manual cranking for filming, resulting in variable frame rates.</p>' },
        { id: 11, content: 'Advent of Sound', start: '1920-01-01', end: '1939-01-01', group: 'additional', className: 'cinematic-advancements', 
            items: '<p><b>The Jazz Singer (1927):</b> This Warner Bros. film marked the transition from silent to sound cinema, featuring synchronized sound and dialogue.</p>' +
                    '<p><b>Vitaphone System:</b> Developed by Western Electric, it synchronized sound with film through a separate disc.</p>' +
                    '<p><b>Movietone Sound System:</b> This system recorded sound directly onto the filmstrip, making it more convenient and popular.</p>' },
        { id: 12, content: 'Color Film', start: '1930-01-01', end: '1939-01-01', group: 'additional', className: 'cinematic-advancements', 
            items: '<p><b>Technicolor:</b> Introduced a three-strip process, creating vibrant and realistic color in films like \"The Wizard of Oz\" (1939).</p>' +
                    '<p><b>Kodachrome:</b> A popular color film stock for both amateur and professional use.</p>' },
        { id: 13, content: 'Widescreen and Aspect Ratios', start: '1950-01-01', end: '1969-01-01', group: 'additional', className: 'cinematic-advancements', 
            items: '<p><b>Cinemascope:</b> Introduced anamorphic widescreen, enhancing the cinematic experience.</p>' +
                    '<p><b>Cinerama:</b> Utilized multiple projectors and screens to create an immersive panoramic experience.</p>' },
        { id: 14, content: 'Special Effects', start: '1950-01-01', end: '1969-01-01', group: 'additional', className: 'cinematic-advancements', 
            items: '<p><b>Stop-motion Animation:</b> Pioneered by Ray Hurryhausen, it brought fantastical creatures to life in films like \"Clash of the Titans\" (1981).</p>' +
                '<p><b>Matte Painting:</b> Used to create background landscapes and environments.</p>' +
                '<p><b>Miniatures:</b> Tiny scale models were filmed to depict large-scale scenes.</p>' },
        { id: 15, content: 'New Film Stocks', start: '1960-01-01', end: '1979-01-01', group: 'additional', className: 'cinematic-advancements', 
            items: '<p><b>Eastman Color and Ektachrome:</b> Improved color film stocks.</p>' +
                    '<p><b>Kodak Super 8:</b> A popular format for amateur filmmakers.</p>' },
        { id: 16, content: 'Computer-Generated Imagery (CGI)', start: '1970-01-01', end: today, group: 'additional', className: 'cinematic-advancements', 
            items: '<p><b>TRON (1982):</b>One of the earliest films to incorporate computer-generated imagery.</p>' +
                '<p><b>Jurrasic Park (1993):</b> Revolutionary use of CGI for lifelike dinosaurs.</p>' },
        { id: 17, content: 'Digital Cinema', start: '1990-01-01', end: today, group: 'additional', className: 'cinematic-advancements', 
            items: '<p><b>George Lucas\' Digital Push:</b> Lucas played a key role in advancing digital filmmaking with the \"Star Wars\" prequels, which began in 1999.</p>' +
                '<p><b>\"The Phantom Menace\" (1999):</b> The first major film to be projected digitally.</p>' },
        { id: 18, content: 'HD and 4K', start: '2000-01-01', end: today, group: 'additional', className: 'cinematic-advancements', 
            items: '<p><b>HD and Ultra HD:</b> Advancements in resolution and image quality.</p>' },
        { id: 19, content: 'AI and Machine Learning', start: '2010-01-01', end: today, group: 'additional', className: 'cinematic-advancements', 
            items: '<p><b>Deepfake Technology:</b> Controversial technology that can alter faces and voices in films.</p>' }
    ]);
    
    // Create a timeline
    const container = document.getElementById('timeline');
    const options = {
        start: '1890-01-01', // Start year for the timeline
        end: '2023-01-01',   // End year for the timeline
        groupOrder: 'desc',  // Order the groups in descending order
        zoomMax: 1000 * 60 * 60 * 24 * 365 * 140, // Set the maximum zoom-out range to 140 years
    };
    const timeline = new vis.Timeline(container, timelineData, options);
    timeline.setGroups([
        { id: 'main', content: 'Movies' },
        { id: 'additional', content: 'Cinematic Advancements' }
    ]);
    timeline.setItems(new vis.DataSet([...timelineData.get(), ...additionalData.get()]));

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
            <p id='release-date'><b>Release Date: </b>${movie.start}</p>
            <p><b>Cinematic Elements: </b>${movie.cinematic}</p>
            <p><b>Visual Elements: </b>${movie.visual}</p>
            <p><b>New Technologies: </b>${movie.tech}</p>
        `;
        movieDetailsContainer.innerHTML = detailsHtml;
        }
    }

    // Get the advancement details container
    const advancementDetailsContainer = document.getElementById('advancement-container');

    // Function to display advancement details
    function displayAdvancementDetails(advId) {
        const adv = additionalData.get(advId);
        if (adv) {
        const detailsHtml = `
            <h3>${adv.content}</h3>
            <p id='release-date'><b>Timeframe: </b>${adv.start} to ${adv.end}</p>
            ${adv.items}
        `;
        advancementDetailsContainer.innerHTML = detailsHtml;
        }
    }

    // Add a click event listener to the timeline items
    timeline.on('click', (properties) => {
        if (properties.item) {
            const item = timelineData.get(properties.item);
            if (item) {
                if (item.group === 'main') {
                    displayMovieDetails(properties.item);
                } else if (item.group === 'additional') {
                    displayAdvancementDetails(properties.item);
                }
            } else {
                const advItem = additionalData.get(properties.item);
                if (advItem) {
                    displayAdvancementDetails(properties.item);
                }
            }
        }
    });

    // Function to set the initial movie details
    function setInitialMovieDetails() {
        // Set the movie ID for "Episode IV: A New Hope"
        const initialMovieId = 1;
        
        // Display the details for the initial movie
        displayMovieDetails(initialMovieId);
    }

    // Call the function to set the initial movie details when the page loads
    window.addEventListener('load', setInitialMovieDetails);

    // Function to set the initial advancement details
    function setInitialAdvancementDetails() {
        // Set the advancement ID for "Silent Film Era"
        const initialAdvId = 10;
        
        // Display the details for the initial advancement
        displayAdvancementDetails(initialAdvId);
    }

    // Call the function to set the initial advancement details when the page loads
    window.addEventListener('load', setInitialAdvancementDetails);




    
/**
 * REVENUE AFTER RELEASE
 */
    google.charts.load('current', {packages:['corechart']});
    google.setOnLoadCallback(drawChart);

    function drawChart() {
        var data = new google.visualization.DataTable();
        data.addColumn('number', 'Day');
        data.addColumn('number', 'Episode VII: The Force Awakens');
        data.addColumn('number', 'Episode VIII: The Last Jedi');
        data.addColumn('number', 'Rogue One: A Star Wars Story');
        data.addColumn('number', 'Episode IX: The Rise of Skywalker');
        data.addColumn('number', 'Episode I: The Phantom Menace');
        data.addColumn('number', 'Episode IV: A New Hope');
        data.addColumn('number', 'Episode III: Revenge of the Sith');
        data.addColumn('number', 'Episode VI: Return of the Jedi');
        data.addColumn('number', 'Episode II: Attack of the Clones');
        data.addColumn('number', 'Episode V: The Empire Strikes Back');
        data.addColumn('number', 'Solo: A Star Wars Story');
        data.addColumn('number', 'Star Wars: The Clone Wars');
        data.addRows(101);
        data.setValue(0, 0, 0);
        data.setValue(1, 0, 1);
        data.setValue(2, 0, 2);
        data.setValue(3, 0, 3);
        data.setValue(4, 0, 4);
        data.setValue(5, 0, 5);
        data.setValue(6, 0, 6);
        data.setValue(7, 0, 7);
        data.setValue(8, 0, 8);
        data.setValue(9, 0, 9);
        data.setValue(10, 0, 10);
        data.setValue(11, 0, 11);
        data.setValue(12, 0, 12);
        data.setValue(13, 0, 13);
        data.setValue(14, 0, 14);
        data.setValue(15, 0, 15);
        data.setValue(16, 0, 16);
        data.setValue(17, 0, 17);
        data.setValue(18, 0, 18);
        data.setValue(19, 0, 19);
        data.setValue(20, 0, 20);
        data.setValue(21, 0, 21);
        data.setValue(22, 0, 22);
        data.setValue(23, 0, 23);
        data.setValue(24, 0, 24);
        data.setValue(25, 0, 25);
        data.setValue(26, 0, 26);
        data.setValue(27, 0, 27);
        data.setValue(28, 0, 28);
        data.setValue(29, 0, 29);
        data.setValue(30, 0, 30);
        data.setValue(31, 0, 31);
        data.setValue(32, 0, 32);
        data.setValue(33, 0, 33);
        data.setValue(34, 0, 34);
        data.setValue(35, 0, 35);
        data.setValue(36, 0, 36);
        data.setValue(37, 0, 37);
        data.setValue(38, 0, 38);
        data.setValue(39, 0, 39);
        data.setValue(40, 0, 40);
        data.setValue(41, 0, 41);
        data.setValue(42, 0, 42);
        data.setValue(43, 0, 43);
        data.setValue(44, 0, 44);
        data.setValue(45, 0, 45);
        data.setValue(46, 0, 46);
        data.setValue(47, 0, 47);
        data.setValue(48, 0, 48);
        data.setValue(49, 0, 49);
        data.setValue(50, 0, 50);
        data.setValue(51, 0, 51);
        data.setValue(52, 0, 52);
        data.setValue(53, 0, 53);
        data.setValue(54, 0, 54);
        data.setValue(55, 0, 55);
        data.setValue(56, 0, 56);
        data.setValue(57, 0, 57);
        data.setValue(58, 0, 58);
        data.setValue(59, 0, 59);
        data.setValue(60, 0, 60);
        data.setValue(61, 0, 61);
        data.setValue(62, 0, 62);
        data.setValue(63, 0, 63);
        data.setValue(64, 0, 64);
        data.setValue(65, 0, 65);
        data.setValue(66, 0, 66);
        data.setValue(67, 0, 67);
        data.setValue(68, 0, 68);
        data.setValue(69, 0, 69);
        data.setValue(70, 0, 70);
        data.setValue(71, 0, 71);
        data.setValue(72, 0, 72);
        data.setValue(73, 0, 73);
        data.setValue(74, 0, 74);
        data.setValue(75, 0, 75);
        data.setValue(76, 0, 76);
        data.setValue(77, 0, 77);
        data.setValue(78, 0, 78);
        data.setValue(79, 0, 79);
        data.setValue(80, 0, 80);
        data.setValue(81, 0, 81);
        data.setValue(82, 0, 82);
        data.setValue(83, 0, 83);
        data.setValue(84, 0, 84);
        data.setValue(85, 0, 85);
        data.setValue(86, 0, 86);
        data.setValue(87, 0, 87);
        data.setValue(88, 0, 88);
        data.setValue(89, 0, 89);
        data.setValue(90, 0, 90);
        data.setValue(91, 0, 91);
        data.setValue(92, 0, 92);
        data.setValue(93, 0, 93);
        data.setValue(94, 0, 94);
        data.setValue(95, 0, 95);
        data.setValue(96, 0, 96);
        data.setValue(97, 0, 97);
        data.setValue(98, 0, 98);
        data.setValue(99, 0, 99);
        data.setValue(100, 0, 100);
        data.setValue(0, 1, 0);
        data.setValue(1, 1, 119119282);
        data.setValue(2, 1, 187413486);
        data.setValue(3, 1, 247966675);
        data.setValue(4, 1, 288076417);
        data.setValue(5, 1, 325438146);
        data.setValue(6, 1, 363460329);
        data.setValue(7, 1, 390856054);
        data.setValue(8, 1, 440181717);
        data.setValue(9, 1, 496913249);
        data.setValue(10, 1, 540058914);
        data.setValue(11, 1, 571420943);
        data.setValue(12, 1, 600949526);
        data.setValue(13, 1, 629034583);
        data.setValue(14, 1, 651967269);
        data.setValue(15, 1, 686361421);
        data.setValue(16, 1, 720729671);
        data.setValue(17, 1, 742208942);
        data.setValue(18, 1, 750230824);
        data.setValue(19, 1, 758198252);
        data.setValue(20, 1, 764408684);
        data.setValue(21, 1, 770381043);
        data.setValue(22, 1, 781125423);
        data.setValue(23, 1, 800329495);
        data.setValue(24, 1, 812734828);
        data.setValue(25, 1, 815843529);
        data.setValue(26, 1, 819687937);
        data.setValue(27, 1, 822802874);
        data.setValue(28, 1, 825932841);
        data.setValue(29, 1, 832261795);
        data.setValue(30, 1, 843290309);
        data.setValue(31, 1, 852274958);
        data.setValue(32, 1, 858953106);
        data.setValue(33, 1, 861334016);
        data.setValue(34, 1, 863148249);
        data.setValue(35, 1, 865032346);
        data.setValue(36, 1, 868567603);
        data.setValue(37, 1, 875382255);
        data.setValue(38, 1, 879110994);
        data.setValue(39, 1, 880406736);
        data.setValue(40, 1, 881981219);
        data.setValue(41, 1, 883305698);
        data.setValue(42, 1, 884644162);
        data.setValue(43, 1, 887112863);
        data.setValue(44, 1, 892202825);
        data.setValue(45, 1, 895760846);
        data.setValue(46, 1, 896541631);
        data.setValue(47, 1, 897469134);
        data.setValue(48, 1, 898267924);
        data.setValue(49, 1, 899071469);
        data.setValue(50, 1, 900844232);
        data.setValue(51, 1, 904613971);
        data.setValue(52, 1, 906044785);
        data.setValue(53, 1, 906723418);
        data.setValue(54, 1, 907431461);
        data.setValue(55, 1, 908059656);
        data.setValue(56, 1, 908644964);
        data.setValue(57, 1, 909833552);
        data.setValue(58, 1, 912295455);
        data.setValue(59, 1, 914804240);
        data.setValue(60, 1, 916285655);
        data.setValue(61, 1, 916860978);
        data.setValue(62, 1, 917326764);
        data.setValue(63, 1, 917806295);
        data.setValue(64, 1, 918724209);
        data.setValue(65, 1, 920502103);
        data.setValue(66, 1, 921713590);
        data.setValue(67, 1, 922010468);
        data.setValue(68, 1, 922375795);
        data.setValue(69, 1, 922692449);
        data.setValue(70, 1, 923001884);
        data.setValue(71, 1, 923673403);
        data.setValue(72, 1, 925119143);
        data.setValue(73, 1, 925988323);
        data.setValue(74, 1, 926225742);
        data.setValue(75, 1, 926508202);
        data.setValue(76, 1, 926745956);
        data.setValue(77, 1, 926977515);
        data.setValue(78, 1, 927400587);
        data.setValue(79, 1, 928264716);
        data.setValue(80, 1, 928842219);
        data.setValue(81, 1, 928995339);
        data.setValue(82, 1, 929158968);
        data.setValue(83, 1, 929305738);
        data.setValue(84, 1, 929459260);
        data.setValue(85, 1, 929768721);
        data.setValue(86, 1, 930350640);
        data.setValue(87, 1, 930757012);
        data.setValue(88, 1, 930901726);
        data.setValue(89, 1, 931067821);
        data.setValue(90, 1, 931216133);
        data.setValue(91, 1, 931358187);
        data.setValue(92, 1, 931598912);
        data.setValue(93, 1, 932027016);
        data.setValue(94, 1, 932324258);
        data.setValue(95, 1, 932448114);
        data.setValue(96, 1, 932582894);
        data.setValue(97, 1, 932715969);
        data.setValue(98, 1, 932857528);
        data.setValue(99, 1, 933145017);
        data.setValue(100, 1, 933468623);
        data.setValue(0, 2, 0);
        data.setValue(1, 2, 104684491);
        data.setValue(2, 2, 168677696);
        data.setValue(3, 2, 220009584);
        data.setValue(4, 2, 241565957);
        data.setValue(5, 2, 261820146);
        data.setValue(6, 2, 278710009);
        data.setValue(7, 2, 296602356);
        data.setValue(8, 2, 321365440);
        data.setValue(9, 2, 350537855);
        data.setValue(10, 2, 368167854);
        data.setValue(11, 2, 395627411);
        data.setValue(12, 2, 423361767);
        data.setValue(13, 2, 445207899);
        data.setValue(14, 2, 464698228);
        data.setValue(15, 2, 483727478);
        data.setValue(16, 2, 503651719);
        data.setValue(17, 2, 517218368);
        data.setValue(18, 2, 531511829);
        data.setValue(19, 2, 539388403);
        data.setValue(20, 2, 544613735);
        data.setValue(21, 2, 548962602);
        data.setValue(22, 2, 555486075);
        data.setValue(23, 2, 565884920);
        data.setValue(24, 2, 572691546);
        data.setValue(25, 2, 574483043);
        data.setValue(26, 2, 576851360);
        data.setValue(27, 2, 578595635);
        data.setValue(28, 2, 580274584);
        data.setValue(29, 2, 582945397);
        data.setValue(30, 2, 587935695);
        data.setValue(31, 2, 592129065);
        data.setValue(32, 2, 594902305);
        data.setValue(33, 2, 596006158);
        data.setValue(34, 2, 596867242);
        data.setValue(35, 2, 597718476);
        data.setValue(36, 2, 599344109);
        data.setValue(37, 2, 602512582);
        data.setValue(38, 2, 604273911);
        data.setValue(39, 2, 604813031);
        data.setValue(40, 2, 605489921);
        data.setValue(41, 2, 606021888);
        data.setValue(42, 2, 606541821);
        data.setValue(43, 2, 607496602);
        data.setValue(44, 2, 609430205);
        data.setValue(45, 2, 610795822);
        data.setValue(46, 2, 611118204);
        data.setValue(47, 2, 611503290);
        data.setValue(48, 2, 611810249);
        data.setValue(49, 2, 612116780);
        data.setValue(50, 2, 612728028);
        data.setValue(51, 2, 613959289);
        data.setValue(52, 2, 614455022);
        data.setValue(53, 2, 614689858);
        data.setValue(54, 2, 614968870);
        data.setValue(55, 2, 615202744);
        data.setValue(56, 2, 615436279);
        data.setValue(57, 2, 615738686);
        data.setValue(58, 2, 616382574);
        data.setValue(59, 2, 616833692);
        data.setValue(60, 2, 616976085);
        data.setValue(61, 2, 617116708);
        data.setValue(62, 2, 617319140);
        data.setValue(63, 2, 617422777);
        data.setValue(64, 2, 617555240);
        data.setValue(65, 2, 617818592);
        data.setValue(66, 2, 618040475);
        data.setValue(67, 2, 618199339);
        data.setValue(68, 2, 618264433);
        data.setValue(69, 2, 618322450);
        data.setValue(70, 2, 618375718);
        data.setValue(71, 2, 618459843);
        data.setValue(72, 2, 618618871);
        data.setValue(73, 2, 618728556);
        data.setValue(74, 2, 618759894);
        data.setValue(75, 2, 618795499);
        data.setValue(76, 2, 618829971);
        data.setValue(77, 2, 618863636);
        data.setValue(78, 2, 618925866);
        data.setValue(79, 2, 619046589);
        data.setValue(80, 2, 619116325);
        data.setValue(81, 2, 619140525);
        data.setValue(82, 2, 619166947);
        data.setValue(83, 2, 619194559);
        data.setValue(84, 2, 619217731);
        data.setValue(85, 2, 619284477);
        data.setValue(86, 2, 619406677);
        data.setValue(87, 2, 619483244);
        data.setValue(88, 2, 619515775);
        data.setValue(89, 2, 619551959);
        data.setValue(90, 2, 619585183);
        data.setValue(91, 2, 619616617);
        data.setValue(92, 2, 619666655);
        data.setValue(93, 2, 619741844);
        data.setValue(94, 2, 619791373);
        data.setValue(95, 2, 619809272);
        data.setValue(96, 2, 619827690);
        data.setValue(97, 2, 619845623);
        data.setValue(98, 2, 619865809);
        data.setValue(99, 2, 619895368);
        data.setValue(100, 2, 619940323);
        data.setValue(0, 3, 0);
        data.setValue(1, 3, 71094394);
        data.setValue(2, 3, 117402509);
        data.setValue(3, 3, 155081681);
        data.setValue(4, 3, 172677831);
        data.setValue(5, 3, 190260809);
        data.setValue(6, 3, 205226599);
        data.setValue(7, 3, 221999674);
        data.setValue(8, 3, 244859930);
        data.setValue(9, 3, 260168438);
        data.setValue(10, 3, 286033442);
        data.setValue(11, 3, 318119079);
        data.setValue(12, 3, 340634691);
        data.setValue(13, 3, 358656173);
        data.setValue(14, 3, 375378705);
        data.setValue(15, 3, 393603022);
        data.setValue(16, 3, 408235850);
        data.setValue(17, 3, 424987707);
        data.setValue(18, 3, 440901381);
        data.setValue(19, 3, 447170302);
        data.setValue(20, 3, 451407837);
        data.setValue(21, 3, 455301354);
        data.setValue(22, 3, 461386328);
        data.setValue(23, 3, 470944786);
        data.setValue(24, 3, 477364924);
        data.setValue(25, 3, 479124415);
        data.setValue(26, 3, 481656462);
        data.setValue(27, 3, 483392763);
        data.setValue(28, 3, 485091734);
        data.setValue(29, 3, 488352439);
        data.setValue(30, 3, 494110018);
        data.setValue(31, 3, 498559923);
        data.setValue(32, 3, 501898446);
        data.setValue(33, 3, 503214018);
        data.setValue(34, 3, 504221149);
        data.setValue(35, 3, 505165563);
        data.setValue(36, 3, 506920743);
        data.setValue(37, 3, 510479559);
        data.setValue(38, 3, 512376033);
        data.setValue(39, 3, 512988112);
        data.setValue(40, 3, 513751825);
        data.setValue(41, 3, 514338899);
        data.setValue(42, 3, 514925573);
        data.setValue(43, 3, 516180747);
        data.setValue(44, 3, 518621071);
        data.setValue(45, 3, 520200086);
        data.setValue(46, 3, 520568505);
        data.setValue(47, 3, 521017843);
        data.setValue(48, 3, 521359922);
        data.setValue(49, 3, 521709512);
        data.setValue(50, 3, 522491009);
        data.setValue(51, 3, 524084080);
        data.setValue(52, 3, 524632391);
        data.setValue(53, 3, 524890656);
        data.setValue(54, 3, 525195691);
        data.setValue(55, 3, 525444763);
        data.setValue(56, 3, 525666968);
        data.setValue(57, 3, 526022771);
        data.setValue(58, 3, 526742417);
        data.setValue(59, 3, 527162956);
        data.setValue(60, 3, 527313525);
        data.setValue(61, 3, 527574276);
        data.setValue(62, 3, 527702381);
        data.setValue(63, 3, 527811468);
        data.setValue(64, 3, 527988785);
        data.setValue(65, 3, 528325382);
        data.setValue(66, 3, 528602776);
        data.setValue(67, 3, 528807482);
        data.setValue(68, 3, 528889332);
        data.setValue(69, 3, 528955491);
        data.setValue(70, 3, 529020544);
        data.setValue(71, 3, 529119197);
        data.setValue(72, 3, 529318582);
        data.setValue(73, 3, 529443931);
        data.setValue(74, 3, 529483936);
        data.setValue(75, 3, 529530812);
        data.setValue(76, 3, 529569369);
        data.setValue(77, 3, 529604792);
        data.setValue(78, 3, 529660204);
        data.setValue(79, 3, 529765704);
        data.setValue(80, 3, 529828733);
        data.setValue(81, 3, 529847607);
        data.setValue(82, 3, 529873133);
        data.setValue(83, 3, 529890569);
        data.setValue(84, 3, 529908400);
        data.setValue(85, 3, 529957087);
        data.setValue(86, 3, 530057390);
        data.setValue(87, 3, 530118047);
        data.setValue(88, 3, 530140814);
        data.setValue(89, 3, 530169869);
        data.setValue(90, 3, 530194268);
        data.setValue(91, 3, 530245532);
        data.setValue(92, 3, 530419898);
        data.setValue(93, 3, 530662500);
        data.setValue(94, 3, 530748437);
        data.setValue(95, 3, 530776689);
        data.setValue(96, 3, 530810385);
        data.setValue(97, 3, 530839782);
        data.setValue(98, 3, 530867499);
        data.setValue(99, 3, 531002279);
        data.setValue(100, 3, 531214429);
        data.setValue(0, 4, 0);
        data.setValue(1, 4, 89615288);
        data.setValue(2, 4, 137082853);
        data.setValue(3, 4, 177383864);
        data.setValue(4, 4, 206773711);
        data.setValue(5, 4, 227044185);
        data.setValue(6, 4, 259209866);
        data.setValue(7, 4, 289796816);
        data.setValue(8, 4, 315866789);
        data.setValue(9, 4, 340942324);
        data.setValue(10, 4, 362186406);
        data.setValue(11, 4, 377488536);
        data.setValue(12, 4, 390706234);
        data.setValue(13, 4, 407782706);
        data.setValue(14, 4, 417057441);
        data.setValue(15, 4, 428095881);
        data.setValue(16, 4, 442415784);
        data.setValue(17, 4, 451582256);
        data.setValue(18, 4, 454560498);
        data.setValue(19, 4, 458541607);
        data.setValue(20, 4, 460945094);
        data.setValue(21, 4, 463110690);
        data.setValue(22, 4, 467002936);
        data.setValue(23, 4, 473772288);
        data.setValue(24, 4, 478297724);
        data.setValue(25, 4, 479451123);
        data.setValue(26, 4, 481307423);
        data.setValue(27, 4, 482569280);
        data.setValue(28, 4, 483645801);
        data.setValue(29, 4, 485616199);
        data.setValue(30, 4, 489145579);
        data.setValue(31, 4, 491934849);
        data.setValue(32, 4, 494238528);
        data.setValue(33, 4, 495189050);
        data.setValue(34, 4, 495816498);
        data.setValue(35, 4, 496410140);
        data.setValue(36, 4, 497663873);
        data.setValue(37, 4, 500207307);
        data.setValue(38, 4, 501982818);
        data.setValue(39, 4, 502418756);
        data.setValue(40, 4, 503039135);
        data.setValue(41, 4, 503458989);
        data.setValue(42, 4, 503863021);
        data.setValue(43, 4, 504715164);
        data.setValue(44, 4, 506441444);
        data.setValue(45, 4, 507075904);
        data.setValue(46, 4, 507358851);
        data.setValue(47, 4, 507768463);
        data.setValue(48, 4, 508052548);
        data.setValue(49, 4, 508321478);
        data.setValue(50, 4, 508844862);
        data.setValue(51, 4, 509923261);
        data.setValue(52, 4, 510634826);
        data.setValue(53, 4, 510833047);
        data.setValue(54, 4, 511102540);
        data.setValue(55, 4, 511292996);
        data.setValue(56, 4, 511486363);
        data.setValue(57, 4, 511875312);
        data.setValue(58, 4, 512423361);
        data.setValue(59, 4, 512876354);
        data.setValue(60, 4, 513198607);
        data.setValue(61, 4, 513346141);
        data.setValue(62, 4, 513461610);
        data.setValue(63, 4, 513563372);
        data.setValue(64, 4, 513707299);
        data.setValue(65, 4, 513968695);
        data.setValue(66, 4, 514129079);
        data.setValue(67, 4, 514177729);
        data.setValue(68, 4, 514238793);
        data.setValue(69, 4, 514281933);
        data.setValue(70, 4, 514325888);
        data.setValue(71, 4, 514408379);
        data.setValue(72, 4, 514571816);
        data.setValue(73, 4, 514684482);
        data.setValue(74, 4, 514718318);
        data.setValue(75, 4, 514763615);
        data.setValue(76, 4, 514798611);
        data.setValue(77, 4, 514829813);
        data.setValue(78, 4, 514881189);
        data.setValue(79, 4, 514975705);
        data.setValue(80, 4, 515028178);
        data.setValue(81, 4, 515049789);
        data.setValue(82, 4, 515076811);
        data.setValue(83, 4, 515097067);
        data.setValue(84, 4, 515115774);
        data.setValue(85, 4, 515137712);
        data.setValue(86, 4, 515172913);
        data.setValue(87, 4, 515192185);
        data.setValue(88, 4, 515198941);
        data.setValue(89, 4, 515201406);
        data.setValue(90, 4, 515201960);
        data.setValue(91, 4, 515202542);
        data.setValue(0, 5, 0);
        data.setValue(1, 5, 28542349);
        data.setValue(2, 5, 40850267);
        data.setValue(3, 5, 59317780);
        data.setValue(4, 5, 83731903);
        data.setValue(5, 5, 105661237);
        data.setValue(6, 5, 116542509);
        data.setValue(7, 5, 124723784);
        data.setValue(8, 5, 132475660);
        data.setValue(9, 5, 140005822);
        data.setValue(10, 5, 153537561);
        data.setValue(11, 5, 172868341);
        data.setValue(12, 5, 191405863);
        data.setValue(13, 5, 207099058);
        data.setValue(14, 5, 212558695);
        data.setValue(15, 5, 217854543);
        data.setValue(16, 5, 222866471);
        data.setValue(17, 5, 231211000);
        data.setValue(18, 5, 245100000);
        data.setValue(19, 5, 255758124);
        data.setValue(20, 5, 259677495);
        data.setValue(21, 5, 263679744);
        data.setValue(22, 5, 267491901);
        data.setValue(23, 5, 271332050);
        data.setValue(24, 5, 278007000);
        data.setValue(25, 5, 288532000);
        data.setValue(26, 5, 296964911);
        data.setValue(27, 5, 299990176);
        data.setValue(28, 5, 303061673);
        data.setValue(29, 5, 306030682);
        data.setValue(30, 5, 309213848);
        data.setValue(31, 5, 314019000);
        data.setValue(32, 5, 321399000);
        data.setValue(33, 5, 328072869);
        data.setValue(34, 5, 330443466);
        data.setValue(35, 5, 332861798);
        data.setValue(36, 5, 335088273);
        data.setValue(37, 5, 337557762);
        data.setValue(38, 5, 341328000);
        data.setValue(39, 5, 347103000);
        data.setValue(40, 5, 351669681);
        data.setValue(41, 5, 353780085);
        data.setValue(42, 5, 356021057);
        data.setValue(43, 5, 357760813);
        data.setValue(44, 5, 359875311);
        data.setValue(45, 5, 362775000);
        data.setValue(46, 5, 366595000);
        data.setValue(47, 5, 369385000);
        data.setValue(48, 5, 373166970);
        data.setValue(49, 5, 374889918);
        data.setValue(50, 5, 376272871);
        data.setValue(51, 5, 377672871);
        data.setValue(52, 5, 379718000);
        data.setValue(53, 5, 382793000);
        data.setValue(54, 5, 385184373);
        data.setValue(55, 5, 386249482);
        data.setValue(56, 5, 387465405);
        data.setValue(57, 5, 388525146);
        data.setValue(58, 5, 389553609);
        data.setValue(59, 5, 390979000);
        data.setValue(60, 5, 393354000);
        data.setValue(61, 5, 395201000);
        data.setValue(62, 5, 396049197);
        data.setValue(63, 5, 396935225);
        data.setValue(64, 5, 397748777);
        data.setValue(65, 5, 398573626);
        data.setValue(66, 5, 399614000);
        data.setValue(67, 5, 401344000);
        data.setValue(68, 5, 402770726);
        data.setValue(69, 5, 403357141);
        data.setValue(70, 5, 404005833);
        data.setValue(71, 5, 404573895);
        data.setValue(72, 5, 405176312);
        data.setValue(73, 5, 406086000);
        data.setValue(74, 5, 407551000);
        data.setValue(75, 5, 408597032);
        data.setValue(76, 5, 409084394);
        data.setValue(77, 5, 409590536);
        data.setValue(78, 5, 410076929);
        data.setValue(79, 5, 410551953);
        data.setValue(80, 5, 411147000);
        data.setValue(81, 5, 412032000);
        data.setValue(82, 5, 412775151);
        data.setValue(83, 5, 413078199);
        data.setValue(84, 5, 413454282);
        data.setValue(85, 5, 413789230);
        data.setValue(86, 5, 414126705);
        data.setValue(87, 5, 414542000);
        data.setValue(88, 5, 415182000);
        data.setValue(89, 5, 415645312);
        data.setValue(90, 5, 415859856);
        data.setValue(91, 5, 416112048);
        data.setValue(92, 5, 416349911);
        data.setValue(93, 5, 416579492);
        data.setValue(96, 5, 417800897);
        data.setValue(97, 5, 417969425);
        data.setValue(98, 5, 418165536);
        data.setValue(99, 5, 418337535);
        data.setValue(100, 5, 418513721);
        data.setValue(0, 6, 0);
        data.setValue(1, 6, 254809);
        data.setValue(2, 6, 493774);
        data.setValue(5, 6, 2048249);
        data.setValue(26, 6, 12943513);
        data.setValue(30, 6, 15628913);
        data.setValue(33, 6, 20514376);
        data.setValue(37, 6, 24704369);
        data.setValue(40, 6, 32157349);
        data.setValue(47, 6, 42129994);
        data.setValue(51, 6, 46970900);
        data.setValue(54, 6, 53777851);
        data.setValue(58, 6, 58886919);
        data.setValue(61, 6, 65887563);
        data.setValue(65, 6, 71089049);
        data.setValue(68, 6, 77323425);
        data.setValue(72, 6, 83089132);
        data.setValue(75, 6, 90284705);
        data.setValue(79, 6, 95562173);
        data.setValue(82, 6, 102267928);
        data.setValue(86, 6, 107122524);
        data.setValue(89, 6, 113031275);
        data.setValue(93, 6, 117336520);
        data.setValue(96, 6, 122576055);
        data.setValue(100, 6, 125989616);
        data.setValue(0, 7, 0);
        data.setValue(1, 7, 50013859);
        data.setValue(2, 7, 83543472);
        data.setValue(3, 7, 124237232);
        data.setValue(4, 7, 158449700);
        data.setValue(5, 7, 172802507);
        data.setValue(6, 7, 182710218);
        data.setValue(7, 7, 191363169);
        data.setValue(8, 7, 200442739);
        data.setValue(9, 7, 216022081);
        data.setValue(10, 7, 236940421);
        data.setValue(11, 7, 255648711);
        data.setValue(12, 7, 270489794);
        data.setValue(13, 7, 274896433);
        data.setValue(14, 7, 278901370);
        data.setValue(15, 7, 282804625);
        data.setValue(16, 7, 289880802);
        data.setValue(17, 7, 300336979);
        data.setValue(18, 7, 307892961);
        data.setValue(19, 7, 310314752);
        data.setValue(20, 7, 312659891);
        data.setValue(21, 7, 314971587);
        data.setValue(22, 7, 317257697);
        data.setValue(23, 7, 321263036);
        data.setValue(24, 7, 327531977);
        data.setValue(25, 7, 332109171);
        data.setValue(26, 7, 333797980);
        data.setValue(27, 7, 335384779);
        data.setValue(28, 7, 336736523);
        data.setValue(29, 7, 338102187);
        data.setValue(30, 7, 340685003);
        data.setValue(31, 7, 344628653);
        data.setValue(32, 7, 348140685);
        data.setValue(33, 7, 349270153);
        data.setValue(34, 7, 350346885);
        data.setValue(35, 7, 351390871);
        data.setValue(36, 7, 352356148);
        data.setValue(37, 7, 354058518);
        data.setValue(38, 7, 356548035);
        data.setValue(39, 7, 358469219);
        data.setValue(40, 7, 359298932);
        data.setValue(41, 7, 360143707);
        data.setValue(42, 7, 360797421);
        data.setValue(43, 7, 361471114);
        data.setValue(44, 7, 362667481);
        data.setValue(45, 7, 364172243);
        data.setValue(46, 7, 365553264);
        data.setValue(47, 7, 366502577);
        data.setValue(48, 7, 367113992);
        data.setValue(49, 7, 367688930);
        data.setValue(50, 7, 368219089);
        data.setValue(51, 7, 368984475);
        data.setValue(52, 7, 370076860);
        data.setValue(53, 7, 370819889);
        data.setValue(54, 7, 371154119);
        data.setValue(55, 7, 371504532);
        data.setValue(56, 7, 371863119);
        data.setValue(57, 7, 372222826);
        data.setValue(58, 7, 372677022);
        data.setValue(59, 7, 373390631);
        data.setValue(60, 7, 373926219);
        data.setValue(61, 7, 374151313);
        data.setValue(62, 7, 374377483);
        data.setValue(63, 7, 374599161);
        data.setValue(64, 7, 374829666);
        data.setValue(65, 7, 375119603);
        data.setValue(66, 7, 375550971);
        data.setValue(67, 7, 375876648);
        data.setValue(71, 7, 376507594);
        data.setValue(74, 7, 377080716);
        data.setValue(78, 7, 377441286);
        data.setValue(81, 7, 377864535);
        data.setValue(85, 7, 378130477);
        data.setValue(88, 7, 378461703);
        data.setValue(92, 7, 378650106);
        data.setValue(95, 7, 378977117);
        data.setValue(99, 7, 379144487);
        data.setValue(0, 8, 0);
        data.setValue(1, 8, 6219629);
        data.setValue(2, 8, 10640780);
        data.setValue(3, 8, 17077785);
        data.setValue(4, 8, 25220293);
        data.setValue(5, 8, 33660398);
        data.setValue(6, 8, 41131399);
        data.setValue(7, 8, 45311004);
        data.setValue(8, 8, 49147393);
        data.setValue(9, 8, 52910693);
        data.setValue(10, 8, 57995112);
        data.setValue(11, 8, 64841280);
        data.setValue(12, 8, 70040387);
        data.setValue(16, 8, 89685511);
        data.setValue(19, 8, 101680575);
        data.setValue(23, 8, 110348602);
        data.setValue(26, 8, 121566148);
        data.setValue(30, 8, 129911354);
        data.setValue(33, 8, 141039269);
        data.setValue(37, 8, 145796032);
        data.setValue(40, 8, 157834658);
        data.setValue(44, 8, 162872277);
        data.setValue(47, 8, 170210203);
        data.setValue(51, 8, 175931858);
        data.setValue(54, 8, 184202708);
        data.setValue(58, 8, 188511867);
        data.setValue(61, 8, 195751286);
        data.setValue(65, 8, 195751286);
        data.setValue(68, 8, 201411234);
        data.setValue(72, 8, 205157200);
        data.setValue(75, 8, 209656205);
        data.setValue(79, 8, 213114618);
        data.setValue(82, 8, 216873917);
        data.setValue(86, 8, 219455574);
        data.setValue(89, 8, 222489243);
        data.setValue(93, 8, 224537134);
        data.setValue(96, 8, 227100205);
        data.setValue(100, 8, 228747532);
        data.setValue(0, 9, 0);
        data.setValue(1, 9, 30141417);
        data.setValue(2, 9, 54546174);
        data.setValue(3, 9, 85799792);
        data.setValue(4, 9, 110169231);
        data.setValue(5, 9, 120829572);
        data.setValue(6, 9, 128332368);
        data.setValue(7, 9, 134869203);
        data.setValue(8, 9, 141305767);
        data.setValue(9, 9, 154093732);
        data.setValue(10, 9, 172654396);
        data.setValue(11, 9, 189186299);
        data.setValue(12, 9, 201309716);
        data.setValue(13, 9, 204853362);
        data.setValue(14, 9, 208049645);
        data.setValue(15, 9, 211321893);
        data.setValue(16, 9, 216685004);
        data.setValue(17, 9, 225836515);
        data.setValue(18, 9, 232324769);
        data.setValue(19, 9, 234539896);
        data.setValue(20, 9, 236818608);
        data.setValue(21, 9, 238923059);
        data.setValue(22, 9, 241094639);
        data.setValue(23, 9, 245003718);
        data.setValue(24, 9, 250707578);
        data.setValue(25, 9, 255106352);
        data.setValue(26, 9, 256589660);
        data.setValue(27, 9, 258244336);
        data.setValue(28, 9, 259739622);
        data.setValue(29, 9, 261313870);
        data.setValue(30, 9, 263723314);
        data.setValue(31, 9, 267443605);
        data.setValue(32, 9, 270752477);
        data.setValue(33, 9, 271762423);
        data.setValue(34, 9, 272791043);
        data.setValue(35, 9, 273751826);
        data.setValue(36, 9, 274677683);
        data.setValue(37, 9, 276072969);
        data.setValue(38, 9, 278180432);
        data.setValue(39, 9, 279828712);
        data.setValue(40, 9, 280490131);
        data.setValue(41, 9, 281192572);
        data.setValue(42, 9, 281883605);
        data.setValue(43, 9, 282585540);
        data.setValue(44, 9, 283568484);
        data.setValue(45, 9, 285027816);
        data.setValue(46, 9, 286253833);
        data.setValue(47, 9, 286907955);
        data.setValue(48, 9, 287529134);
        data.setValue(49, 9, 288161397);
        data.setValue(50, 9, 288846743);
        data.setValue(51, 9, 289679904);
        data.setValue(52, 9, 290580041);
        data.setValue(53, 9, 291297397);
        data.setValue(54, 9, 291583685);
        data.setValue(55, 9, 291908000);
        data.setValue(56, 9, 292217226);
        data.setValue(57, 9, 292535647);
        data.setValue(58, 9, 292873443);
        data.setValue(59, 9, 293401552);
        data.setValue(60, 9, 293817404);
        data.setValue(61, 9, 293997301);
        data.setValue(62, 9, 294202767);
        data.setValue(63, 9, 294394454);
        data.setValue(64, 9, 294600919);
        data.setValue(65, 9, 294884828);
        data.setValue(66, 9, 295293148);
        data.setValue(67, 9, 295621557);
        data.setValue(68, 9, 295766805);
        data.setValue(69, 9, 295924810);
        data.setValue(70, 9, 296067735);
        data.setValue(71, 9, 296205413);
        data.setValue(72, 9, 296415496);
        data.setValue(73, 9, 296732351);
        data.setValue(74, 9, 296976568);
        data.setValue(75, 9, 297089926);
        data.setValue(76, 9, 297222027);
        data.setValue(77, 9, 297348841);
        data.setValue(78, 9, 297480499);
        data.setValue(79, 9, 297651841);
        data.setValue(80, 9, 297898652);
        data.setValue(81, 9, 298104822);
        data.setValue(85, 9, 298496955);
        data.setValue(86, 9, 298596080);
        data.setValue(87, 9, 298738344);
        data.setValue(88, 9, 298843836);
        data.setValue(92, 9, 299075298);
        data.setValue(93, 9, 299172192);
        data.setValue(94, 9, 299309889);
        data.setValue(95, 9, 299401811);
        data.setValue(99, 9, 299602067);
        data.setValue(100, 9, 299693041);
        data.setValue(0, 10, 0);
        data.setValue(1, 10, 1333305);
        data.setValue(2, 10, 2341114);
        data.setValue(3, 10, 3738470);
        data.setValue(4, 10, 5473664);
        data.setValue(5, 10, 7244308);
        data.setValue(6, 10, 8756918);
        data.setValue(7, 10, 9612663);
        data.setValue(19, 10, 11584077);
        data.setValue(26, 10, 15190077);
        data.setValue(30, 10, 36492546);
        data.setValue(33, 10, 47332853);
        data.setValue(37, 10, 55686501);
        data.setValue(40, 10, 64904375);
        data.setValue(44, 10, 73648233);
        data.setValue(47, 10, 81958005);
        data.setValue(51, 10, 87643508);
        data.setValue(54, 10, 94296366);
        data.setValue(58, 10, 98993000);
        data.setValue(61, 10, 105714000);
        data.setValue(65, 10, 111180568);
        data.setValue(68, 10, 118310568);
        data.setValue(72, 10, 124241211);
        data.setValue(75, 10, 130000000);
        data.setValue(79, 10, 134515285);
        data.setValue(82, 10, 139069964);
        data.setValue(86, 10, 141572707);
        data.setValue(89, 10, 145893923);
        data.setValue(0, 11, 0);
        data.setValue(1, 11, 35375125);
        data.setValue(2, 11, 59977021);
        data.setValue(3, 11, 84420489);
        data.setValue(4, 11, 103016812);
        data.setValue(5, 11, 110312579);
        data.setValue(6, 11, 115168465);
        data.setValue(7, 11, 119592692);
        data.setValue(8, 11, 127713778);
        data.setValue(9, 11, 140032398);
        data.setValue(10, 11, 148989574);
        data.setValue(11, 11, 151954195);
        data.setValue(12, 11, 155941558);
        data.setValue(13, 11, 158485879);
        data.setValue(14, 11, 160951474);
        data.setValue(15, 11, 165007109);
        data.setValue(16, 11, 171558288);
        data.setValue(17, 11, 176700049);
        data.setValue(18, 11, 178503096);
        data.setValue(19, 11, 180768711);
        data.setValue(20, 11, 182386562);
        data.setValue(21, 11, 183764087);
        data.setValue(22, 11, 186252361);
        data.setValue(23, 11, 189845504);
        data.setValue(24, 11, 193765143);
        data.setValue(25, 11, 194865401);
        data.setValue(26, 11, 196194730);
        data.setValue(27, 11, 197203695);
        data.setValue(28, 11, 198131870);
        data.setValue(29, 11, 199401040);
        data.setValue(30, 11, 201315484);
        data.setValue(31, 11, 202639402);
        data.setValue(32, 11, 203167281);
        data.setValue(33, 11, 203862225);
        data.setValue(34, 11, 204414703);
        data.setValue(35, 11, 204986115);
        data.setValue(36, 11, 205740097);
        data.setValue(37, 11, 206814087);
        data.setValue(38, 11, 207673785);
        data.setValue(39, 11, 208159516);
        data.setValue(40, 11, 208796867);
        data.setValue(41, 11, 209462907);
        data.setValue(42, 11, 209860097);
        data.setValue(43, 11, 210203043);
        data.setValue(44, 11, 210631505);
        data.setValue(45, 11, 210931529);
        data.setValue(46, 11, 211073523);
        data.setValue(47, 11, 211247396);
        data.setValue(48, 11, 211394632);
        data.setValue(49, 11, 211512976);
        data.setValue(50, 11, 211626663);
        data.setValue(51, 11, 211802260);
        data.setValue(52, 11, 211920767);
        data.setValue(53, 11, 211979799);
        data.setValue(54, 11, 212059656);
        data.setValue(55, 11, 212117662);
        data.setValue(56, 11, 212174307);
        data.setValue(57, 11, 212237986);
        data.setValue(58, 11, 212338799);
        data.setValue(59, 11, 212418646);
        data.setValue(60, 11, 212456195);
        data.setValue(61, 11, 212505541);
        data.setValue(62, 11, 212545777);
        data.setValue(63, 11, 212578759);
        data.setValue(64, 11, 212622097);
        data.setValue(65, 11, 212683162);
        data.setValue(66, 11, 212730648);
        data.setValue(67, 11, 212754633);
        data.setValue(68, 11, 212783601);
        data.setValue(69, 11, 212811203);
        data.setValue(70, 11, 212836501);
        data.setValue(71, 11, 212892211);
        data.setValue(72, 11, 212972871);
        data.setValue(73, 11, 213029424);
        data.setValue(74, 11, 213060730);
        data.setValue(75, 11, 213094878);
        data.setValue(76, 11, 213125776);
        data.setValue(77, 11, 213154445);
        data.setValue(78, 11, 213188510);
        data.setValue(79, 11, 213244763);
        data.setValue(80, 11, 213285583);
        data.setValue(81, 11, 213304279);
        data.setValue(82, 11, 213325191);
        data.setValue(83, 11, 213343736);
        data.setValue(84, 11, 213361662);
        data.setValue(85, 11, 213388267);
        data.setValue(86, 11, 213428786);
        data.setValue(87, 11, 213462269);
        data.setValue(88, 11, 213476293);
        data.setValue(89, 11, 213491679);
        data.setValue(90, 11, 213505150);
        data.setValue(91, 11, 213521649);
        data.setValue(92, 11, 213542656);
        data.setValue(93, 11, 213574015);
        data.setValue(94, 11, 213593805);
        data.setValue(95, 11, 213601143);
        data.setValue(96, 11, 213609237);
        data.setValue(97, 11, 213617154);
        data.setValue(98, 11, 213625230);
        data.setValue(99, 11, 213638434);
        data.setValue(100, 11, 213661256);
        data.setValue(0, 12, 0);
        data.setValue(1, 12, 6228973);
        data.setValue(2, 12, 11248417);
        data.setValue(3, 12, 14611273);
        data.setValue(4, 12, 15977803);
        data.setValue(5, 12, 17315825);
        data.setValue(6, 12, 18394914);
        data.setValue(7, 12, 19337598);
        data.setValue(8, 12, 20932935);
        data.setValue(9, 12, 23311016);
        data.setValue(10, 12, 24999054);
        data.setValue(11, 12, 25576195);
        data.setValue(12, 12, 26079598);
        data.setValue(13, 12, 26493966);
        data.setValue(14, 12, 26908022);
        data.setValue(15, 12, 27578764);
        data.setValue(16, 12, 28684185);
        data.setValue(17, 12, 29619167);
        data.setValue(18, 12, 30672432);
        data.setValue(19, 12, 30845729);
        data.setValue(20, 12, 30964105);
        data.setValue(21, 12, 31060544);
        data.setValue(22, 12, 31358904);
        data.setValue(23, 12, 32238558);
        data.setValue(24, 12, 32752889);
        data.setValue(25, 12, 32821058);
        data.setValue(26, 12, 32893998);
        data.setValue(27, 12, 32965880);
        data.setValue(28, 12, 33037851);
        data.setValue(29, 12, 33181538);
        data.setValue(30, 12, 33600698);
        data.setValue(31, 12, 33919298);
        data.setValue(32, 12, 33963634);
        data.setValue(33, 12, 34004108);
        data.setValue(34, 12, 34045559);
        data.setValue(35, 12, 34083901);
        data.setValue(36, 12, 34159322);
        data.setValue(37, 12, 34344189);
        data.setValue(38, 12, 34477361);
        data.setValue(39, 12, 34497337);
        data.setValue(40, 12, 34515516);
        data.setValue(41, 12, 34534603);
        data.setValue(42, 12, 34554944);
        data.setValue(43, 12, 34590283);
        data.setValue(44, 12, 34679263);
        data.setValue(45, 12, 34742666);
        data.setValue(46, 12, 34752477);
        data.setValue(47, 12, 34767389);
        data.setValue(48, 12, 34776933);
        data.setValue(49, 12, 34786432);
        data.setValue(50, 12, 34801083);
        data.setValue(51, 12, 34832920);
        data.setValue(52, 12, 34853585);
        data.setValue(53, 12, 34857512);
        data.setValue(54, 12, 34861596);
        data.setValue(55, 12, 34865517);
        data.setValue(56, 12, 34871515);
        data.setValue(57, 12, 34877557);
        data.setValue(58, 12, 34888635);
        data.setValue(59, 12, 34897507);
        data.setValue(60, 12, 34903540);
        data.setValue(61, 12, 34905652);
        data.setValue(62, 12, 34907733);
        data.setValue(63, 12, 34910438);
        data.setValue(64, 12, 34939535);
        data.setValue(65, 12, 34981621);
        data.setValue(66, 12, 35011371);
        data.setValue(67, 12, 35019106);
        data.setValue(68, 12, 35026609);
        data.setValue(69, 12, 35033587);
        data.setValue(70, 12, 35041472);
        data.setValue(71, 12, 35053379);
        data.setValue(72, 12, 35074877);
        data.setValue(73, 12, 35089551);
        data.setValue(74, 12, 35092486);
        data.setValue(75, 12, 35095362);
        data.setValue(76, 12, 35098020);
        data.setValue(77, 12, 35101475);
        data.setValue(78, 12, 35104604);
        data.setValue(79, 12, 35117699);
        data.setValue(80, 12, 35129959);
        data.setValue(81, 12, 35132054);
        data.setValue(82, 12, 35135825);
        data.setValue(83, 12, 35137655);
        data.setValue(84, 12, 35139759);
        data.setValue(85, 12, 35142050);
        data.setValue(86, 12, 35149199);
        data.setValue(87, 12, 35154336);
        data.setValue(88, 12, 35156494);
        data.setValue(89, 12, 35160210);
        data.setValue(90, 12, 35160805);
        data.setValue(91, 12, 35161554);

        for (var i = 0; i <= 100; i++) {
            data.setValue(i, 3, null);
            data.setValue(i, 11, null);
            data.setValue(i, 12, null);
        }

        var options = {
            vAxis: {minValue: 0, format: '$#,###', textPosition: 'in', viewWindow: {min:0} },
            title: 'Daily Cumulative Domestic Box Office',
            curveType: 'function',
            interpolateNulls: true,
            legend: { position: 'right' }, 
                    width:'100%',
            height:360,
                    
            chartArea: {left:0, width: '80%', height: '100%'},
            titlePosition: 'in', axisTitlesPosition: 'in',
            hAxis: {textPosition: 'in'},
            explorer: {
                actions: ['dragToZoom', 'rightClickToReset'],
                axis: 'horizontal',
                keepInBounds: true,
                maxZoomIn: 10.0
            }
        };

        options.series = {
            2: { visibleInLegend: false },
            10: { visibleInLegend: false },
            11: { visibleInLegend: false }
        }

        var chart = new google.visualization.LineChart(document.getElementById('revenue-over-time'));

        var formatter = new google.visualization.NumberFormat( {prefix: '$', fractionDigits: 0});
        formatter.format(data, 1);
        formatter.format(data, 2);
        formatter.format(data, 3);
        formatter.format(data, 4);
        formatter.format(data, 5);
        formatter.format(data, 6);
        formatter.format(data, 7);
        formatter.format(data, 8);
        formatter.format(data, 9);
        formatter.format(data, 10);
        formatter.format(data, 11);
        formatter.format(data, 12);

        var formatter2 = new google.visualization.NumberFormat( {prefix: 'Day: ', fractionDigits: 0});
        formatter2.format(data, 0);
        
        chart.draw(data, options);
	
    }