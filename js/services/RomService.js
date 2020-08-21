// list.find: Tìm kiếm và trả ra một đối tượng đầu tiên tìm thấy
// list.filter: Tìm kiếm và trả ra một danh sách các đối tượng
// list.foreach: Vòng lặp
let roomModel = {
    id: "",
    images: ["https://bayleaf.s3.amazonaws.com/property-images%2F1589907212337_FB_IMG_1588724494510.jpg",
        "https://bayleaf.s3.amazonaws.com/property-images%2F1589907212337_FB_IMG_1588724494510.jpg"
    ],
    price: 3500000,
    address: "",
    gender: ["male", "female"],
    roomType: "căn hộ",
    facility: ["wifi", "chỗ để xe", "máy lạnh"],
};
/**
 * @returns {roomModel[]}
 */
function getListRoom() {
    var danhSachPhongTro = [];
    // TODO:

    return danhSachPhongTro;
}
/**
 * @param  {string} id
 * @returns {roomModel}
 */
function getByIdRoom(id) {
    var room;
    // TODO:
    return room;
}
/**
 * @param  {roomModel}
 * @returns {roomModel}
 */
function createRoom(room) {
    // TODO:
    return room;
}
/**
 * @param  {string} id
 * @param  {roomModel} room
 */
function updateRoom(id, room) {
    // TODO
    return room;
}
/**
 * @param  {string} id
 */
function deleteRoom(id) {
    var rooms = getListRoom();
    var deleteRooms = rooms.filter((room) => rooms.id != id);
    localStorage.setItem("rooms", deleteRooms);
}