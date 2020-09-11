// let rooms = getListRoom();
// for (var i = 0; rooms.length; i++) {
//     var room = rooms[i];

// }

// rooms.forEach(rooms => {

// });

// var roomPriceLessThan4 = rooms.filter

function taoDoiTuongPhong(titlePhong, loaiPhong, gioiTinh, kichThuoc, diaChi, hinhAnhChinh, hinhXacMinh, giaPhong, id) {
    var phong = new Object();
    phong.titlePhong = titlePhong;
    phong.loaiPhong = loaiPhong;
    phong.gioiTinh = gioiTinh;
    phong.kichThuoc = kichThuoc;
    phong.diaChi = diaChi;
    phong.hinhAnhChinh = hinhAnhChinh;
    phong.hinhXacMinh = hinhXacMinh;
    phong.giaPhong = giaPhong;
    phong.id = id;

    // TẠO ĐỊNH DANH CHO ĐỐI TƯỢNG
    if (id == null) {
        phong.id = genID();
    } else {
        phong.id = id;
    }

    phong.toJson = function() {
            var json = JSON.stringify(this);
            return json;
        }
        //     // Từ json chuyển thành một đối tượng đầy đủ các phương thức
        //     // input: json
        //     // output: đối tượng đầy đủ
    phong.fromJSON = function(json) {
        var doiTuongDayDu = new Object();
        // Bước 1: Chuyển từ json thành đối tượng
        var doiTuong = JSON.parse(json);
        // Bước 2: Chuyển đối tượng thành đối tượng đầy đủ phương thức
        var doiTuongDayDu = taoDoiTuongPhong(doiTuong.titlePhong, doiTuong.loaiPhong, doiTuong.gioiTinh, doiTuong.kichThuoc, doiTuong.diaChi, doiTuong.hinhAnhChinh, doiTuong.hinhXacMinh, doiTuong.giaPhong, doiTuong.id);
        return doiTuongDayDu;
    }

    phong.fromJSONs = function(jsonDanhSachPhong) {
        var danhSachPhongDayDu = new Array();
        var danhSachPhong = JSON.parse(jsonDanhSachPhong);
        for (var i = 0; i < danhSachPhong.length; i++) {
            var phong = danhSachPhong[i];
            var phongDayDu = taoDoiTuongPhong(phong.titlePhong, phong.loaiPhong, phong.gioiTinh, phong.kichThuoc, phong.diaChi, phong.hinhAnhChinh, phong.hinhXacMinh, phong.giaPhong, phong.id);
            danhSachPhongDayDu[i] = phongDayDu;
        }
        return danhSachPhongDayDu;
    }

    return phong;
}

// Mục tiêu: Dựa vào ID của phòng để lấy ra được đối tượng phòng (nằm trong danh sách lưu trữ local storage)
// Input: ID phòng
// Output: Đối tượng phòng
function laySanPhamTheoId(idPhong) {
    var phong = new Object();
    // Bước 1: Lấy toàn bộ phòng trong localStorage ra
    var danhSachPhong = layDanhSachPhongDuoiLocalStorage('danhSachPhong');
    // console.log(danhSachPhong);
    // Bước 2: Duyệt danh sách phòng để tìm ra phòng nào có ID phòng
    for (var i = 0; i < danhSachPhong.length; i++) {
        var phongHienTai = danhSachPhong[i];
        if (phongHienTai.id == idPhong) {
            phong = phongHienTai;
        }
    }
    phong = taoDoiTuongPhong(phong.titlePhong, phong.loaiPhong, phong.gioiTinh, phong.kichThuoc, phong.diaChi, phong.hinhAnhChinh, phong.hinhXacMinh, phong.giaPhong, phong.id);
    return phong;
}