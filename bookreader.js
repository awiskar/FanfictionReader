'use strict';

window.addEventListener('load', function() {
	// all of the tabs elements
	var homeTab = document.getElementById("homeTab");
	var addBookTab = document.getElementById("addBookTab");
	var favouritesTab = document.getElementById("favouritesTab");
	var archiveTab = document.getElementById("archiveTab");

	// all of the page elements
	var homePage = document.getElementById("homePage");
	var addBookPage = document.getElementById("addBookPage");
	var favouritesPage = document.getElementById("favouritesPage");
	var archivePage = document.getElementById("archivePage");

	// TODO - fix this to be a template or something passing the correct tab necessary
	// make homePage active by clicking on homeTab -- inactivate all other tabs

	var changeActiveTab = function(clickedTab) {
		var homeNoDisplayLoc = homePage.className.search("nodisplay");
		var addBookNoDisplayLoc = addBookPage.className.search("nodisplay");
		var favouritesNoDisplayLoc = favouritesPage.className.search("nodisplay");
		var archiveNoDisplayLoc = archivePage.className.search("nodisplay");

		var homeActiveLoc = homeTab.className.search("active");
		var addBookActiveLoc = addBookTab.className.search("active");
		var favouritesActiveLoc = favouritesTab.className.search("active");
		var archiveActiveLoc = archiveTab.className.search("active");

		if(homeTab.id === clickedTab && homeNoDisplayLoc === 0) { // hometab is clicked and not active
			homePage.className = homePage.className.substring(0, homeNoDisplayLoc);
			homeTab.className = homeTab.className + "active";
		} else if(homeTab.id !== clickedTab && homeActiveLoc !== -1) { // hometab is not clicked and is currently active
			homePage.className = homePage.className + "nodisplay";
			homeTab.className = homeTab.className.substring(0, homeActiveLoc);
		}

		if(addBookTab.id === clickedTab && addBookNoDisplayLoc === 0) { // addBookTab is clicked and not active
			addBookPage.className = addBookPage.className.substring(0, addBookNoDisplayLoc);
			addBookTab.className = addBookTab.className + "active";
		} else if(addBookTab.id !== clickedTab && addBookActiveLoc !== -1) { // addBookTab is not clicked and currently active 
			addBookPage.className = addBookPage.className + "nodisplay";
			addBookTab.className = addBookTab.className.substring(0, addBookActiveLoc);
		}

		if(favouritesTab.id === clickedTab && favouritesNoDisplayLoc === 0) { // favouritesTab is clicked and not active
			favouritesPage.className = favouritesPage.className.substring(0, favouritesNoDisplayLoc);
			favouritesTab.className = favouritesTab.className + "active";
		} else if(favouritesTab.id !== clickedTab && favouritesActiveLoc !== -1) { // favouritesTab is not clicked and currently active
			favouritesPage.className = favouritesPage.className + "nodisplay";
			favouritesTab.className = favouritesTab.className.substring(0, favouritesActiveLoc);
		}

		if(archiveTab.id === clickedTab && archiveNoDisplayLoc === 0) { // archiveTab is clicked and not active
			archivePage.className = archivePage.className.substring(0, archiveNoDisplayLoc);
			archiveTab.className = archiveTab.className + "active";
		} else if(archiveTab.id !== clickedTab && archiveActiveLoc !== -1) { // archiveTab is not clicked and currently active
			archivePage.className = archivePage.className + "nodisplay";
			archiveTab.className = archiveTab.className.substring(0, archiveActiveLoc);
		}
	};

	homeTab.addEventListener('click', function() { changeActiveTab(homeTab.id); });
	addBookTab.addEventListener('click', function() { changeActiveTab(addBookTab.id); });
	favouritesTab.addEventListener('click', function() { changeActiveTab(favouritesTab.id); });
	archiveTab.addEventListener('click', function() { changeActiveTab(archiveTab.id); });
	
});