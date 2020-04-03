const INITIAL_STATE = {
  rooms: null
};

const applySetRoom = (state, action) => ({
  ...state,
  rooms: {
    ...state.rooms,
    [action.uid]: action.room
  }
});

const applySetRooms = (state, action) => ({
  ...state,
  rooms: action.rooms
});

function roomReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ROOMS_SET": {
      return applySetRooms(state, action);
    }
    case "ROOM_SET": {
      return applySetRoom(state, action);
    }
    default:
      return state;
  }
}

export default roomReducer;
