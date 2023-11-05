function getValue(id) {
  return document.getElementById(id).value;
}
function checkLength(ch, n) {
  return ch.length >= n;
}
function checkPwd(ch1, ch2) {
  return ch1 == ch2;
}
function checkTel(ch, n) {
  return ch.length == n;
}
function checkPrice(n1, n2) {
  return Number(n1) > n2;
}
function checkNumber(n1, n2) {
  return Number(n1) >= n2;
}
function generateId(T) {
  var max;
  //tab vide
  if (T.length == 0) {
    max = 0;
  } else {
    max = T[0].id;
    for (let i = 1; i < T.length; i++) {
      if (T[i].id > max) {
        max = T[i].id;
      }
    }
  }
  return max;
}
function getFromLS(key) {
  return JSON.parse(localStorage.getItem(key) || "[]");
}
function checkCondition(a, id, msg) {
  if (a == false) {
    document.getElementById(id).innerHTML = msg;
    document.getElementById(id).style.color = "red";
  } else {
    document.getElementById(id).innerHTML = "";
  }
}
function searchObjByIdAndKey(id, key) {
  var T = JSON.parse(localStorage.getItem(key) || "[]");
  var findedObj;
  for (let i = 0; i < T.length; i++) {
    if (T[i].id == id) {
      findedObj = T[i];
      break;
    }
  }
  return findedObj;
}
function searchObjByPos(id, key) {
  var T = getFromLS(key);
  var pos;
  for (let i = 0; i < T.length; i++) {
    if (T[i].id == id) {
      pos = i;
      break;
    }
  }
  return pos;
}
function encryptPassword(password) {
  var encryptedPassword = CryptoJS.AES.encrypt(
    password,
    "SecretPassphrase"
  ).toString();
  return encryptedPassword;
}
function decryptPassword(encryptedPassword) {
  var bytes = CryptoJS.AES.decrypt(encryptedPassword, "SecretPassphrase");
  var decryptedPassword = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedPassword;
}
//register Client
function signupC() {
  //first Name Client
  var FirstNameC = getValue("FirstNameC");
  var isFirstNameCValid = checkLength(FirstNameC, 3);
  checkCondition(
    isFirstNameCValid,
    "firstNameCError",
    "first Name should have at least 3 carac"
  );
  // last name Client
  var LastNameC = document.getElementById("LastNameC").value;
  var isLastNameCValid = checkLength(LastNameC, 3);
  checkCondition(
    isLastNameCValid,
    "lastNameCError",
    "Last Name should have at least 3 carac"
  );
  //email client
  var EmailC = getValue("EmailC");
  var isEmailCValid = checkLength(EmailC, 4);
  checkCondition(isEmailCValid, "emailCError", "email should be correct");
  //phone client
  var PhoneC = getValue("PhoneC");
  var isPhoneCValid = checkTel(PhoneC, 8);
  checkCondition(isPhoneCValid, "telCError", "tel should have 8 carac");
  //password client
  var PasswordC = getValue("PasswordC");
  var isPasswordCValid = checkLength(PasswordC, 6);
  checkCondition(
    isPasswordCValid,
    "passwordCError",
    "pwd should have at least 6 carac"
  );
  //confirm client
  var ConfirmPasswordC = getValue("ConfirmPasswordC");
  var isConfirmPasswordCValid = checkPwd(ConfirmPasswordC, PasswordC);
  checkCondition(
    isConfirmPasswordCValid,
    "ConfirmPasswordCError",
    "password does not match"
  );
  var encryptedPasswordC = encryptPassword(PasswordC);
  var encryptedConfirmPasswordC = encryptPassword(ConfirmPasswordC);
  //condition et creation de l'objet
  if (
    isFirstNameCValid == true &&
    isLastNameCValid &&
    isEmailCValid &&
    isPhoneCValid &&
    isPasswordCValid &&
    isConfirmPasswordCValid
  ) {
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    //création de l'obj
    var user = {
      id: generateId(usersTab) + 1,
      FirstName: FirstNameC,
      LastName: LastNameC,
      Email: EmailC,
      Phone: PhoneC,
      Password: encryptedPasswordC,
      ConfirmPassword: encryptedConfirmPasswordC,
      role: "client",
    };
    usersTab.push(user);
    localStorage.setItem("users", JSON.stringify(usersTab));
    window.location.href = "login.html";
  }
}
//register Owner
function signupO() {
  //first Name Owner
  var FirstNameO = getValue("FirstNameO");
  var isFirstNameOValid = checkLength(FirstNameO, 3);
  checkCondition(
    isFirstNameOValid,
    "firstNameOError",
    "first Name should have at least 3 carac"
  );

  //Last Name Owner
  var LastNameO = document.getElementById("LastNameO").value;
  var isLastNameOValid = checkLength(LastNameO, 3);
  checkCondition(
    isLastNameOValid,
    "lastNameOError",
    "Last Name should have at least 3 carac"
  );

  //email Owner
  var EmailO = getValue("EmailO");
  var isEmailOValid = checkLength(EmailO, 4);
  checkCondition(isEmailOValid, "emailOError", "email should be correct");

  //phone Owner
  var PhoneO = getValue("PhoneO");
  var isPhoneOValid = checkTel(PhoneO, 8);
  checkCondition(isPhoneOValid, "telOError", "tel should have 8 carac");

  //password Owner
  var PasswordO = getValue("PasswordO");
  var isPasswordOValid = checkLength(PasswordO, 6);
  checkCondition(
    isPasswordOValid,
    "passwordOError",
    "pwd should have at least 6 carac"
  );
  var encryptedPassword0 = encryptPassword(PasswordO);
  if (
    isFirstNameOValid == true &&
    isLastNameOValid &&
    isEmailOValid &&
    isPhoneOValid &&
    isPasswordOValid
  ) {
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    //création de l'obj
    var user = {
      id: generateId(usersTab) + 1,
      FirstName: FirstNameO,
      LastName: LastNameO,
      Email: EmailO,
      Phone: PhoneO,
      Password: encryptedPassword0,
      role: "owner",
      status: "NOK",
    };
    usersTab.push(user);
    localStorage.setItem("users", JSON.stringify(usersTab));
    window.location.href = "login.html";
  }
}
//register Admin
function signupA() {
  //first Name Admin
  var FirstNameA = getValue("FirstNameA");
  var isFirstNameAValid = checkLength(FirstNameA, 3);
  checkCondition(
    isFirstNameAValid,
    "firstNameAError",
    "first Name should have at least 3 carac"
  );

  //Last Name Admin
  var LastNameA = document.getElementById("LastNameA").value;
  var isLastNameAValid = checkLength(LastNameA, 3);
  checkCondition(
    isLastNameAValid,
    "lastNameAError",
    "Last Name should have at least 3 carac"
  );

  //email Admin
  var EmailA = getValue("EmailA");
  var isEmailAValid = checkLength(EmailA, 4);
  checkCondition(isEmailAValid, "emailAError", "email should be correct");

  //password Admin
  var PasswordA = getValue("PasswordA");
  var isPasswordAValid = checkLength(PasswordA, 6);
  checkCondition(
    isPasswordAValid,
    "passwordAError",
    "pwd should have at least 6 carac"
  );
  var encryptedPasswordA = encryptPassword(PasswordA);
  if (
    isFirstNameAValid == true &&
    isLastNameAValid &&
    isEmailAValid &&
    isPasswordAValid
  ) {
    var usersTab = JSON.parse(localStorage.getItem("users") || "[]");
    //création de l'obj
    var user = {
      id: generateId(usersTab) + 1,
      FirstName: FirstNameA,
      LastName: LastNameA,
      Email: EmailA,
      Password: encryptedPasswordA,
      role: "admin",
    };
    usersTab.push(user);
    localStorage.setItem("users", JSON.stringify(usersTab));
    window.location.href = "login.html";
  }
}
//login
function login() {
  // Get the entered email and password
  var EmailLogin = document.getElementById("EmailLogin").value;
  var PasswordLogin = document.getElementById("PasswordLogin").value;

  // Retrieve all users from localStorage
  var usersTab = JSON.parse(localStorage.getItem("users") || "[]");

  // Find the user with the entered email
  var findedUser = usersTab.find((user) => user.Email === EmailLogin);

  // User exists
  if (findedUser) {
    var decryptedPassword = decryptPassword(findedUser.Password);

    // Compare the decrypted password with the entered password
    if (decryptedPassword === PasswordLogin) {
      // Redirect based on the user's role
      if (findedUser.role === "client") {
        localStorage.setItem("connectedUserId", findedUser.id);
        location.replace("index.html");
      } else if (findedUser.role === "owner") {
        if (findedUser.status === "NOK") {
          document.getElementById("loginError").innerHTML =
            "Account not yet verified";
        } else {
          localStorage.setItem("connectedUserId", findedUser.id);
          location.replace("index.html");
        }
      } else {
        localStorage.setItem("connectedUserId", findedUser.id);
        location.replace("index.html");
      }
    } else {
      document.getElementById("loginError").innerHTML =
        "Please check your email or password";
      document.getElementById("loginError").style.color = "red";
    }
  } else {
    document.getElementById("loginError").innerHTML =
      "Please check your email or password";
    document.getElementById("loginError").style.color = "red";
  }
}

//deconnecter
function logOut() {
  localStorage.removeItem("connectedUserId");
  location.replace("index.html");
}
//ajouter une maison house
function addHouse() {
  var HouseName = getValue("HouseName");
  var isHouseNameValid = checkLength(HouseName, 6);
  checkCondition(
    isHouseNameValid,
    "HouseNameError",
    "House should have at least 6 characters"
  );

  var AddressHouse = getValue("AddressHouse");
  var isAddressHouseValid = checkLength(AddressHouse, 6);
  checkCondition(
    isAddressHouseValid,
    "AddressHouseError",
    "Address should have at least 6 characters"
  );
  // Image handling
  var HouseImage = document.getElementById("HouseImage");
  var imageFile = HouseImage.files[0]; // Get the first selected file

  var SizeHouse = getValue("SizeHouse");
  var ServiceHouse = getValue("ServiceHouse");

  if (isHouseNameValid && isAddressHouseValid) {
    var housesTab = getFromLS("houses") || [];
    var connectedUserId = localStorage.getItem("connectedUserId");

    // Create the house object with an empty array of rooms
    var house = {
      id: generateId(housesTab) + 1,
      name: HouseName,
      address: AddressHouse,
      ownerId: connectedUserId,
      size: SizeHouse,
      service: ServiceHouse,
      rooms: [], // Initialize an empty array for rooms
    };

    // Save into localStorage
    housesTab.push(house);
    localStorage.setItem("houses", JSON.stringify(housesTab));
  }
}
//ajouter une chambre
function addRoom() {
  var RoomName = getValue("RoomName");
  var isRoomNameValid = checkLength(RoomName, 6);
  checkCondition(
    isRoomNameValid,
    "RoomNameError",
    "Room should have at least 6 carac"
  );
  var PriceRoom = getValue("PriceRoom");

  if (isRoomNameValid) {
    var roomsTab = JSON.parse(localStorage.getItem("rooms") || "[]");
    var connectedUserId = localStorage.getItem("connectedUserId");
    var houseSelect = getValue("houseSelect");

    // Creation of the object
    var room = {
      id: generateId(roomsTab) + 1,
      name: RoomName,
      price: PriceRoom,
      ownerId: connectedUserId,
      houseId: houseSelect,
    };

    // Save into local storage
    roomsTab.push(room);
    localStorage.setItem("rooms", JSON.stringify(roomsTab));

    // Updating the corresponding house object with the room's id
    var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
    for (let i = 0; i < housesTab.length; i++) {
      if (housesTab[i].id == houseSelect) {
        // Check if rooms array already exists, if not, initialize it as an empty array
        if (!housesTab[i].rooms) {
          housesTab[i].rooms = [];
        }
        housesTab[i].rooms.push(room.id); // Push the new room id into the rooms array
        break;
      }
    }
    localStorage.setItem("houses", JSON.stringify(housesTab));
  }
}
//afficher les maison fel houses.html
function displayHouses() {
  var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  var content = ``;
  for (let i = 0; i < housesTab.length; i++) {
    content =
      content +
      `
    <div class="col-lg-4 col-md-6">
    <div class="room-item">
      <img src="img/room/room-1.jpg" alt="" />
      <div class="ri-text">
        <h4>${housesTab[i].name}</h4>
        <h3>${housesTab[i].size} m²</h3>
        <table>
          <tbody>
            <tr>
              <td class="r-o">Services:</td>
              <td>Wifi, Television, Bathroom,...</td>
            </tr>
          </tbody>
        </table>
        <a class="primary-btn" onclick="goToDisplayHouseId(${housesTab[i].id})">More Details</a>
      </div>
    </div>
  </div>
    `;
  }
  document.getElementById("housesDiv").innerHTML = content;
}
function goToDisplayHouseId(id) {
  localStorage.setItem("displayedHouseId", id);
  location.replace("rooms.html");
}
function deleteOrderByPos(id) {
  var ordersTab = getFromLS("orders");
  var pos = searchObjByPos(id, "orders");
  ordersTab.splice(pos, 1);
  localStorage.setItem("orders", JSON.stringify(ordersTab));
  location.reload();
}
//afficher les rooms fel houseDetail.html
function displayRooms() {
  var rooms = JSON.parse(localStorage.getItem("rooms") || "[]");
  var displayedHouseId = localStorage.getItem("displayedHouseId");
  var content = ""; // Initialize the content variable

  for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].houseId == displayedHouseId) {
      content += `
      <div class="col-lg-4 col-md-6">
      <div class="room-item">
        <img src="img/room/room-1.jpg" alt="" />
        <div class="ri-text">
          <h4>${rooms[i].name}</h4>
          <table>
            <tbody>
              <tr>
                <td class="r-o">Price:</td>
                <td>${rooms[i].price}</td> <!-- Display the price directly here -->
              </tr>
            </tbody>
          </table>
          <a class="primary-btn" onclick="addToBasket(${rooms[i].id})">add to basket</a>
        </div>
      </div>
      
    </div>
      `;
    }
  }
  document.getElementById("roomsDiv").innerHTML = content;
}
function addToBasket(id) {
  localStorage.setItem("displayedRoomId", id);
  var connectedUserId = localStorage.getItem("connectedUserId");
  var displayedRoomId = localStorage.getItem("displayedRoomId");
  var displayedHouseId = localStorage.getItem("displayedHouseId");
  var ordersTab = JSON.parse(localStorage.getItem("orders") || "[]");
  // Create the order object
  var order = {
    id: generateId(ordersTab) + 1,
    userId: connectedUserId,
    houseId: displayedHouseId,
    roomId: displayedRoomId,
  };
  // Save into Local Storage
  ordersTab.push(order);
  localStorage.setItem("orders", JSON.stringify(ordersTab));
  location.replace("basket.html"); // Redirect to the basket page
}
//AFFICHER LES ORDERS POUR LES CLIENTS
function displayMyOrders() {
  var ordersTab = getFromLS("orders");
  var connectedUserId = localStorage.getItem("connectedUserId");
  var myOrders = [];
  for (let i = 0; i < ordersTab.length; i++) {
    if (ordersTab[i].userId == connectedUserId) {
      myOrders.push(ordersTab[i]);
    }
  }
  var content = ``;
  for (let i = 0; i < myOrders.length; i++) {
    var user = searchObjByIdAndKey(myOrders[i].userId, "users");
    var house = searchObjByIdAndKey(myOrders[i].houseId, "houses");
    var room = searchObjByIdAndKey(myOrders[i].roomId, "rooms");
    var firstName = user ? user.FirstName : "N/A";
    var houseName = house ? house.name : "N/A";
    var roomName = room ? room.name : "N/A";

    content += `
      <tr>
        <td>
          <h5>${firstName}</h5>
        </td>
        <td>
          <h5>${houseName}</h5>
        </td>
        <td>
          <h5>${roomName}</h5>
        </td>
        <td><button class="btn btn-danger" onclick="deleteOrderByPos(${myOrders[i].id})">Delete</button></td>
      </tr>
      `;
  }
  document.getElementById("ordersDiv").innerHTML = content;
}
//AFFICHER LES ORDERS POUR LES OWNER
function displayOwnerHouses() {
  var houses = getFromLS("houses");
  var myHouses = [];
  var content = "";
  var connectedUserId = localStorage.getItem("connectedUserId");
  for (let i = 0; i < houses.length; i++) {
    if (houses[i].ownerId == connectedUserId) {
      myHouses.push(houses[i]);
    }
  }
  for (let i = 0; i < myHouses.length; i++) {
    content =
      content +
      `
      <tr>
      <td><span class="bg-blight">${myHouses[i].name}</span></td>
      <td><span class="bg-bdark"></span>${myHouses[i].address}</td>
      <td><span class="bg-blight"></span>${myHouses[i].size}</td>
      <td><span class="bg-blight"></span></td>
    </tr>
      `;
  }
  document.getElementById("houseDiv").innerHTML = content;
}
function displayOwnerRooms() {
  var rooms = getFromLS("rooms");
  var myRooms = [];
  var content = "";
  var connectedUserId = localStorage.getItem("connectedUserId");
  for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].ownerId == connectedUserId) {
      myRooms.push(rooms[i]);
    }
  }
  console.log(rooms);
  for (let i = 0; i < myRooms.length; i++) {
    content =
      content +
      `
      <tr>
      <td><span class="bg-blight">${myRooms[i].name}</span></td>
      <td><span class="bg-bdark">${myRooms[i].price}</span></td>
      <td><td><button class="btn btn-danger"onclick=""> Delete </button></td></td>
    </tr>
      `;
  }
  document.getElementById("roomDiv").innerHTML = content;
}
//AFFICHER LES USERS DANS ADMIN DASHBOARD
function displayAdminUsers() {
  var usersTab = getFromLS("users");
  var content = "";
  for (let i = 0; i < usersTab.length; i++) {
    if (usersTab[i].role != "admin") {
      if (usersTab[i].role == "owner" && usersTab[i].status == "NOK") {
        content =
          content +
          `<tr>
        <td><span class="bg-blight">${usersTab[i].id}</span></td>
        <td><span class="bg-bdark">${usersTab[i].FirstName}</span></td>
        <td><span class="bg-blight">${usersTab[i].Phone}</span></td>
        <td><span class="bg-bdark">${usersTab[i].Email}</span></td>
        <td><span class="bg-blight">${usersTab[i].role}</span></td>
        <td><span class="bg-bdark">${usersTab[i].status}</span></td>
        <td><button class="btn btn-danger" onclick="deleteUserByAdmin(${usersTab[i].id})"> Delete </button></td>
        <td><button class="btn btn-warning" onclick="validateStore(${usersTab[i].id})"> Update </button></td>
        
      </tr>`;
      } else {
        content =
          content +
          `
        <tr>
        <td><span class="bg-blight">${usersTab[i].id}</span></td>
        <td><span class="bg-bdark">${usersTab[i].FirstName}</span></td>
        <td><span class="bg-blight">${usersTab[i].Phone}</span></td>
        <td><span class="bg-bdark">${usersTab[i].Email}</span></td>
        <td><span class="bg-blight">${usersTab[i].role}</span></td>
        <td><span class="bg-bdark">${usersTab[i].status}</span></td>
        <td><button class="btn btn-danger" onclick="deleteUserByAdmin(${usersTab[i].id})"> Delete </button></td>
      </tr>
        `;
      }
    }
  }
  document.getElementById("usersDiv").innerHTML = content;
}
//supprimer un user par l'admin
function deleteUserByAdmin(id) {
  var usersTab = getFromLS("users");
  var pos = searchObjByPos(id, "users");
  usersTab.splice(pos, 1);
  localStorage.setItem("users", JSON.stringify(usersTab));
  location.reload();
}
//AFFICHER LES HOUSE PAR L'ADMIN
function displayAdminHouses() {
  var productsHouses = JSON.parse(localStorage.getItem("houses") || "[]");
  var content = ``;
  for (let i = 0; i < productsHouses.length; i++) {
    content =
      content +
      `
    <tr>
    <td><span class="bg-blight">${productsHouses[i].id}</span></td>
    <td><span class="bg-bdark">${productsHouses[i].name}</span></td>
    <td><span class="bg-blight">${productsHouses[i].ownerId}</span></td>
    <td><span class="bg-bdark">${productsHouses[i].address}</span></td>
    <td><span class="bg-blight">${productsHouses[i].size}</span></td>
    <td><button class="btn btn-danger"onclick="deleteHouseByAdmin(${productsHouses[i].id})"> Delete </button></td>
    <td><button class="btn btn-warning"> Validate </button></td>
  </tr>
    `;
  }
  document.getElementById("housesAdminDiv").innerHTML = content;
}
//fonction qui permet à l'admin de supprimer un house
function deleteHouseByAdmin(id) {
  var housesTab = getFromLS("houses");
  var pos = searchObjByPos(id, "houses");
  var ordersTab = getFromLS("orders");

  for (let i = 0; i < ordersTab.length; i++) {
    if (ordersTab[i].houseId == id) {
    }
  }
  housesTab.splice(pos, 1);
  localStorage.setItem("houses", JSON.stringify(housesTab));
  location.reload();
}
//AFFICHER LES ROOMS PAR L'ADMIN
function displayAdminRooms() {
  var productsRooms = JSON.parse(localStorage.getItem("rooms") || "[]");
  var content = ``;
  for (let i = 0; i < productsRooms.length; i++) {
    content =
      content +
      `
      <tr>
      <td><span class="bg-blight">${productsRooms[i].id}</span></td>
      <td><span class="bg-bdark">${productsRooms[i].ownerId}</span></td>
      <td><span class="bg-blight">${productsRooms[i].name}</span></td>
      <td><span class="bg-bdark">${productsRooms[i].price}</span></td>
      <td><button class="btn btn-danger"onclick="deleteRoomByAdmin(${productsRooms[i].id})"> Delete </button></td>
    </tr>
      `;
  }
  document.getElementById("roomsAdminDiv").innerHTML = content;
}
//supprimer room
function deleteRoomByAdmin(id) {
  var roomsTab = getFromLS("rooms");
  var pos = searchObjByPos(id, "houses");
  var ordersTab = getFromLS("orders");
  for (let i = 0; i < ordersTab.length; i++) {
    if (ordersTab[i].roomId == id) {
    }
  }
  roomsTab.splice(pos, 1);
  localStorage.setItem("rooms", JSON.stringify(roomsTab));
  location.reload();
}
//afficher le profile
function displayProfile() {
  var connectedUserId = localStorage.getItem("connectedUserId");
  var connectedUser = searchObjByIdAndKey(connectedUserId, "users");
  console.log("connectedUser", connectedUser);
  document.getElementById("connectedUserFirstName").innerHTML =
    connectedUser.FirstName;
  document.getElementById("connectedUserLastName").innerHTML =
    connectedUser.LastName;
  document.getElementById("connectedUserEmail").innerHTML = connectedUser.Email;
}
//edit Profile form
function editProfile() {
  var connectedUserId = localStorage.getItem("connectedUserId");
  var form = `
  <div class="col-lg-7 offset-lg-1" style="margin-bottom: 10%">
      <div action="#" class="contact-form">
        <div class="row">
          <div class="col-lg-6">
            <input type="text" id="newName" placeholder="Your First Name" />
          </div>
          <div class="col-lg-6">
            <input type="text" id="newEmail" placeholder="Your Email" />
          </div>
          <div class="col-lg-12">
            <button
              onclick="validateEditProfile(${connectedUserId})"
              style="
                padding: 10px 20px;
                background-color: #e0b444d5;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              "
            >
              Validate
            </button>
          </div>
        </div>
      </div>
    </div>
  `;
  document.getElementById("profileEdit").innerHTML = form;
}
//validate edit profile
function validateEditProfile(id) {
  var newName = document.getElementById("newName").value;
  var newEmail = document.getElementById("newEmail").value;
  var users = getFromLS("users");
  for (let i = 0; i < users.length; i++) {
    if (users[i].id == id) {
      users[i].FirstName = newName;
      users[i].Email = newEmail;
      break;
    }
  }
  localStorage.setItem("users", JSON.stringify(users));
  location.reload();
}
//generate header selon el user
function generateHeader() {
  var connectedUserId = localStorage.getItem("connectedUserId");
  var connectedUser = searchObjByIdAndKey(connectedUserId, "users");
  var content = ``;

  if (connectedUserId) {
    if (connectedUser.role == "client") {
      content = `      
      <div class="top-nav">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <ul class="tn-left">
              <li><i class="fa fa-phone"></i> (12) 345 67890</li>
              <li><i class="fa fa-envelope"></i> info.colorlib@gmail.com</li>
            </ul>
          </div>
          <div class="col-lg-6">
            <div class="tn-right">
              <div class="top-social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-tripadvisor"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
              </div>
              <a href="#" class="bk-btn">Booking Now</a>
              <div class="language-option">
                <img src="img/flag.jpg" alt="" />
                <span>EN <i class="fa fa-angle-down"></i></span>
                <div class="flag-dropdown">
                  <ul>
                    <li><a href="#">Zi</a></li>
                    <li><a href="#">Fr</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="menu-item">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="logo">
              <a href="./index.html">
                <img src="img/logo.png" alt="" />
              </a>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="nav-menu">
              <nav class="mainmenu">
                <ul>
                  <li><a href="./index.html">Home</a></li>
                  <li><a href="./houses.html">Houses</a></li>
                  <li><a href="./basket.html">Basket</a></li>
                  <li><a href="./profile.html">Profile</a></li>
                  <li><a href="./login.html" onclick="logOut()">Logout</a></li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
      `;
    } else if (connectedUser.role == "owner") {
      content = `
      <div class="top-nav">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <ul class="tn-left">
              <li><i class="fa fa-phone"></i> (12) 345 67890</li>
              <li><i class="fa fa-envelope"></i> info.colorlib@gmail.com</li>
            </ul>
          </div>
          <div class="col-lg-6">
            <div class="tn-right">
              <div class="top-social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-tripadvisor"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
              </div>
              <a href="#" class="bk-btn">Booking Now</a>
              <div class="language-option">
                <img src="img/flag.jpg" alt="" />
                <span>EN <i class="fa fa-angle-down"></i></span>
                <div class="flag-dropdown">
                  <ul>
                    <li><a href="#">Zi</a></li>
                    <li><a href="#">Fr</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="menu-item">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="logo">
              <a href="./index.html">
                <img src="img/logo.png" alt="" />
              </a>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="nav-menu">
              <nav class="mainmenu">
                <ul>
                  <li><a href="./index.html">Home</a></li>
                  <li><a href="./dashboardO.html">Dashboard</a></li>
                  <li><a href="./addHouses.html">Add Houses</a></li>
                  <li><a href="./addRoom.html">Add Rooms</a></li>
                  <li><a href="./houses.html">Houses</a></li>
                  <li><a href="./profile.html">Profile</a></li>
                  <li><a href="./login.html" onclick="logOut()">Logout</a></li>
                </ul>
              </nav>
              <div class="nav-right search-switch">
                <i class="icon_search"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    } else {
      content = `
      <div class="top-nav">
      <div class="container">
        <div class="row">
          <div class="col-lg-6">
            <ul class="tn-left">
              <li><i class="fa fa-phone"></i> (12) 345 67890</li>
              <li><i class="fa fa-envelope"></i> info.colorlib@gmail.com</li>
            </ul>
          </div>
          <div class="col-lg-6">
            <div class="tn-right">
              <div class="top-social">
                <a href="#"><i class="fa fa-facebook"></i></a>
                <a href="#"><i class="fa fa-twitter"></i></a>
                <a href="#"><i class="fa fa-tripadvisor"></i></a>
                <a href="#"><i class="fa fa-instagram"></i></a>
              </div>
              <a href="#" class="bk-btn">Booking Now</a>
              <div class="language-option">
                <img src="img/flag.jpg" alt="" />
                <span>EN <i class="fa fa-angle-down"></i></span>
                <div class="flag-dropdown">
                  <ul>
                    <li><a href="#">Zi</a></li>
                    <li><a href="#">Fr</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="menu-item">
      <div class="container">
        <div class="row">
          <div class="col-lg-2">
            <div class="logo">
              <a href="./index.html">
                <img src="img/logo.png" alt="" />
              </a>
            </div>
          </div>
          <div class="col-lg-10">
            <div class="nav-menu">
              <nav class="mainmenu">
                <ul>
                  <li><a href="./index.html">Home</a></li>
                  <li><a href="./dashboardA.html">Dashboard</a></li>
                  <li><a href="./houses.html">Houses</a></li>
                  <li><a href="./profile.html">Profile</a></li>
                  <li><a href="./login.html" onclick="logOut()">Logout</a></li>
                </ul>
              </nav>
              <div class="nav-right search-switch">
                <i class="icon_search"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      `;
    }
  } else {
    content = `
    <div class="top-nav">
    <div class="container">
        <div class="row">
            <div class="col-lg-6">
                <ul class="tn-left">
                    <li><i class="fa fa-phone"></i> (12) 345 67890</li>
                    <li><i class="fa fa-envelope"></i> info.colorlib@gmail.com</li>
                </ul>
            </div>
            <div class="col-lg-6">
                <div class="tn-right">
                    <div class="top-social">
                        <a href="#"><i class="fa fa-facebook"></i></a>
                        <a href="#"><i class="fa fa-twitter"></i></a>
                        <a href="#"><i class="fa fa-tripadvisor"></i></a>
                        <a href="#"><i class="fa fa-instagram"></i></a>
                    </div>
                    <a href="#" class="bk-btn">Booking Now</a>
                    <div class="language-option">
                        <img src="img/flag.jpg" alt="">
                        <span>EN <i class="fa fa-angle-down"></i></span>
                        <div class="flag-dropdown">
                            <ul>
                                <li><a href="#">Zi</a></li>
                                <li><a href="#">Fr</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="menu-item">
    <div class="container">
        <div class="row">
            <div class="col-lg-2">
                <div class="logo">
                    <a href="./index.html">
                        <img src="img/logo.png" alt="">
                    </a>
                </div>
            </div>
            <div class="col-lg-10">
                <div class="nav-menu">
                    <nav class="mainmenu">
                        <ul>
                            <li><a href="./index.html">Home</a></li>
                            <li><a href="./login.html">Login</a></li>
                            <li>        
                                        <a>Register</a>
                                        <ul class="dropdown">
                                            <li><a href="registerC.html">Client</a></li>
                                            <li><a href="registerO.html">House Owner</a></li>
                                        </ul>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>
    </div>
</div>

    `;
  }
  document.getElementById("headerDiv").innerHTML = content;
}
//afficher house dans la balise select
function populateHouseSelect() {
  var housesTab = JSON.parse(localStorage.getItem("houses") || "[]");
  var selectElement = document.getElementById("houseSelect");

  // Clear any existing options
  selectElement.innerHTML = '<option value="" selected>Select a House</option>';

  // Populate the select element with options
  for (let i = 0; i < housesTab.length; i++) {
    var option = document.createElement("option");
    option.value = housesTab[i].id;
    option.text = housesTab[i].id;
    selectElement.appendChild(option);
  }
}
//rendre le status OK pour le store
function validateStore(id) {
  var usersTab = getFromLS("users");
  for (let i = 0; i < usersTab.length; i++) {
    if (usersTab[i].id == id) {
      usersTab[i].status = "OK";
      break;
    }
  }
  localStorage.setItem("users", JSON.stringify(usersTab));
  location.reload();
}

function searchProduct() {
  var houseS = document.getElementById("SearchHouse").value;
  var houses = getFromLS("houses");
  var content = "";
  var findedHouse = [];
  for (let i = 0; i < houses.length; i++) {
    if (houses[i].name == houseS) {
      findedHouse.push(houses[i]);
    }
  }
  for (let i = 0; i < houses.length; i++) {
    content =
      content +
      `
      <div class="col-lg-4 col-md-6">
      <div class="room-item">
        <img src="img/room/room-1.jpg" alt="" />
        <div class="ri-text">
          <h4>${houses[i].name}</h4>
          <h3>${houses[i].size} m²</h3>
          <table>
            <tbody>
              <tr>
                <td class="r-o">Services:</td>
                <td>Wifi, Television, Bathroom,...</td>
              </tr>
            </tbody>
          </table>
          <a class="primary-btn" onclick="goToDisplayHouseId(${houses[i].id})">More Details</a>
        </div>
      </div>
    </div>
      `;
  }
  document.getElementById("searchDiv").innerHTML = content;
}
