package com.sofka.controller;
import com.sofka.service.ContactService;
import com.sofka.domain.Contact;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import java.util.List;
import java.util.Optional;

@Slf4j
@RestController
@CrossOrigin(origins = "http://localhost:3001")

public class ContactController {

    @Autowired
    private ContactService contactService;

    @GetMapping(path = "/contacts")
    public List<Contact> contactList (@RequestParam(required = false) String name) {
        return contactService.list();
    }

    @PostMapping(path = "/contact")
    public ResponseEntity<Contact> createContact (@RequestBody Contact contact) {
        log.info("Contacto a crear: {}", contact);
        contactService.save(contact);
        return new ResponseEntity<>(contact, HttpStatus.CREATED);
    }

    @DeleteMapping(path = "/contact/{id}")
    public ResponseEntity<Contact>  deleteContact (Contact contact) {
        log.info("Contacto a borrar: {}", contact);
        contactService.delete(contact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @GetMapping(path ="/contact/{id}")
    public ResponseEntity<Contact> findContact(Contact contact, @PathVariable("id") Long id) {
        Optional<Contact> tutorialData = contactService.findContact(contact);
        if (tutorialData.isPresent()) {
            return new ResponseEntity<>(tutorialData.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping(path = "/contact/{id}")
    public ResponseEntity<Contact> updateContact (@RequestBody Contact contact, @PathVariable("id") Long id) {
        log.info("Usuario a modificar: {}", contact);
        contactService.update(id, contact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @PatchMapping(path = "/contact/name/{id}")
    public ResponseEntity<Contact>  updateName (Contact contact, @PathVariable("id") Long id) {
        log.info("Nombre del contacto a modificar: {}", contact);
        contactService.updateName(id, contact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }


    @PatchMapping(path = "/contact/email/{id}")
    public ResponseEntity<Contact>  updateEmail (Contact contact, @PathVariable("id") Long id) {
        log.info("Email del contacto a modificar: {}", contact);
        contactService.updateEmail(id, contact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @PatchMapping(path = "/contact/telephone/{id}")
    public ResponseEntity<Contact>  updateTelephone (Contact contact, @PathVariable("id") Long id) {
        log.info("Teléfono del contacto a modificar: {}", contact);
        contactService.updateTelephone(id, contact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }

    @PatchMapping(path = "/contact/birthday/{id}")
    public ResponseEntity<Contact>  updateBirthday (Contact contact, @PathVariable("id") Long id) {
        log.info("Fecha de nacimiento del contacto a modificar: {}", contact);
        contactService.updateBirthDay(id, contact);
        return new ResponseEntity<>(contact, HttpStatus.OK);
    }
}
