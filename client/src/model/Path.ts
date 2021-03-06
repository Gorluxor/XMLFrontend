export class Path {
  getExtraservices = 'http://localhost:9999/api/reservation/service/';
  getUnitTypes = 'http://localhost:9999/api/reservation/unit' ;
  getReservation = 'path3';
  getMessages = 'http://localhost:9999/api/message/msg/user/';
  getChatRooms = 'http://localhost:9999/api/message/msg/user/';
  respondMessage = 'http://localhost:9999/api/message/msg/';
  searchAccommodation = 'http://localhost:9999/api/search/search/accommodation/normal';
  advancedSearchAccommodation = 'http://localhost:9999/api/search/search/accommodation/advanced';
  searchAccommodationUnits = 'http://localhost:9999/api/search/search/accommodation/';
  login = 'http://localhost:9999/api/auth/users/login';
  register = 'http://localhost:9999/api/auth/users/signup';
  getRoleRequest = 'http://localhost:9999/api/auth/users/role';
  getUsers = 'http://localhost:9999/api/auth/users';
  activateUser = 'http://localhost:9999/api/auth/users/activate/';
  blockUser = 'http://localhost:9999/api/auth/users/block/';
  deleteUser = 'http://localhost:9999/api/auth/users/delete/';
  getUserByEmail = 'http://localhost:9999/api/auth/users/email/';
  getAllAccomodation = ' ';
  getReservations = 'http://localhost:9999/api/agent/res/user';
  getAgentReservations = 'http://localhost:9999/api/agent/res/agent';
  getPricing = 'http://localhost:9999/api/agent/unit/';
  createReservation = 'http://localhost:9999/api/agent/res';
  cancelReservation = 'http://localhost:9999/api/agent/res/cancel/';
  createChatRoom = 'http://localhost:9999/api/message/msg/chatRoom/create';
  realiseStay = 'http://localhost:9999/api/agent/res/confirm/';
  getAccommodationUnits = 'http://localhost:9999/api/agent/acc/';
  getAgentAccommodations = 'http://localhost:9999/api/agent/acc/unitAgent';
  createUnit = 'http://localhost:9999/api/agent/acc/';
  registerAgent = 'http://localhost:9999/api/auth/users/agentRegister';
  getAllTypes = 'http://localhost:9999/api/reservation/type' ;
  addType = 'http://localhost:9999/api/reservation/type' ;
  deleteType = 'http://localhost:9999/api/reservation/type' ;
  getType = 'http://localhost:9999/api/reservation/type' ;

  getExtraServices = 'http://localhost:9999/api/reservation/service' ;

  getRatings = 'http://localhost:9999/api/reservation/rating' ;
  getRealisedReservations = 'http://localhost:9999/api/agent/res/user/realised';
  rate = 'http://localhost:9999/api/reservation/rating/add';

  getApprovedRatings = 'http://localhost:9999/api/agent/acc/getAllApprovedRatings' ;

}
