package com.esite.demo.controller;

import com.esite.demo.Repo.Userrepo;
import com.esite.demo.models.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
public class ApiController {
    @Autowired
    private Userrepo userrepo ;

//    @GetMapping(value = "/")
//    public String getPage() {
//        return "Welcome";
//    }

    @GetMapping(value = "/users")
    public ResponseEntity<List<User>> getUsers() {
        return new ResponseEntity<List<User>>(userrepo.findAll(), HttpStatus.OK);
    }
    @GetMapping(value = "/user/{id}")
    public ResponseEntity<User> getUser(@PathVariable long id) {
        return new ResponseEntity<User>(userrepo.findById(id).get(), HttpStatus.OK);
    }

    @PostMapping(value = "/save")
    public String saveUser(@RequestBody User user){
        userrepo.save(user);
        return "Saved";
    }
    @PutMapping(value = "/update/{id}")
    public String updateUser(@PathVariable long id ,@RequestBody User user) {
       User updateUser = userrepo.findById(id).get();
       updateUser.setFirstName(user.getFirstName());
       updateUser.setLastName(user.getLastName());
       updateUser.setAge(user.getAge());
       updateUser.setOccupation(user.getOccupation());
       userrepo.save(updateUser);
       return "Updated";
    }
    @DeleteMapping(value = "/delete/{id}")
    public String deleteUser(@PathVariable long id){
        User deleteUser = userrepo.findById(id).get();
        userrepo.delete(deleteUser);
        return "Deleted User with Id " + id;
    }
}
