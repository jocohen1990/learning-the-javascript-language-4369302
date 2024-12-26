var counties = ["Belknap", "Strafford", "Carroll", "Rockingham"];

counties[0];
counties[2];

counties[2] = "Cheshire";
counties;

counties[4] = "Carroll";
counties;

//Adding another item to an array
counties[counties.length] = "Merrimack";
counties;

//Adding another item to an array
counties.push("Coos");
counties;

counties.pop();

delete counties[2];
counties;

counties.splice(2, 1); //this means the 3rd listed item, 1 item at this time, removes the <1 empty item> text
counties;
counties.length;

// More info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
