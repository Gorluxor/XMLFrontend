export class Path {
  getExtraservices = 'http://localhost:9999/api/reservation/service/';
  getUnitTypes = 'http://localhost:9999/api/reservation/unit' ;
  getReservation = 'path3';
  getMessages = 'http://localhost:8080/api/agent/res/GetListMessagesForChatRoom/';
  getChatRooms = 'http://localhost:8080/api/agent/res/GetChatRooms/';
  respondMessage = 'http://localhost:8080/api/agent/res/SendMessage/';
  searchAccommodation = 'http://localhost:9999/api/search/search/accommodation/normal';
  advancedSearchAccommodation = 'http://localhost:9999/api/search/search/accommodation/advanced';
  searchAccommodationUnits = 'http://localhost:9999/api/search/search/accommodation/';
  login = 'http://localhost:9999/api/auth/users/login';
  register = 'http://localhost:9999/api/auth/users/signup';
  getUsers = 'http://localhost:9999/api/auth/users';
  activateUser = 'http://localhost:9999/api/auth/users/activate/';
  blockUser = 'http://localhost:9999/api/auth/users/block/';
  deleteUser = 'http://localhost:9999/api/auth/users/delete/';
  getUserByEmail = 'http://localhost:9999/api/auth/users/email/';
  getAllAccomodation = ' ';
  getReservations = 'http://localhost:9999/api/agent/res/user';
  getAgentReservations = 'http://localhost:8080/api/agent/res/GetListReservationsForAgent';
  getPricing = 'http://localhost:9999/api/agent/unit/';
  createReservation = 'http://localhost:9999/api/agent/res';
  cancelReservation = 'http://localhost:9999/api/agent/res/cancel/';
  createChatRoom = 'http://localhost:9999/api/message/msg/chatRoom/create';
  realiseStay = 'http://localhost:8080/api/agent/res/ConfirmReservation/';
  getAccommodationUnits = 'http://localhost:9999/api/agent/acc/';
  getAgentAccommodations = 'http://localhost:9999/api/agent/acc/unitAgent';
  createUnit = 'http://localhost:9999/api/agent/acc/';
  getAccommodationsAgentId = 'http://localhost:8080/api/agent/acc/id/';
  loginLokalno = 'http://localhost:8080/api/agent/res/Login';

}
