# A react-native app with 2 screens.

## Original Version 

1. Hello screen with a button to navigate to the second screen
2. The second screen has a tab navigation on the bottom, with labels “list” and “map”

The list tab shows a list of the POIs (Point of interest).
For your current location the app asks for location permission when it starts. 
In case the user does not allow the location permission, the app informs the user 
accordingly with a message. 

## Upcoming Version
### Second screen 
- The list tab shows a list of the POIs (Point of interest) sorted by your distance from them. 
  The list should display the address of the poi and the distance.
  
- In case the user does not allow the location permission "list tab" should be sorted by address name instead of distance and 
  the distance value will be empty. The app should work correctly on both android and iOS devices.
  
- The second tab will show a google map with all the pois using clusters.

### Notes

1. The pois are locally for now but will be fetched from a url in the Upcoming Version 
   and will be saved to a redux store. 
   
2. The pois will be taken from the redux store, too. 
