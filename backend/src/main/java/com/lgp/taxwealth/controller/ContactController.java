package com.lgp.taxwealth.controller;

import com.lgp.taxwealth.model.ContactMessage;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class ContactController {

    private static final Logger log = LoggerFactory.getLogger(ContactController.class);

    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> submitContact(
            @Valid @RequestBody ContactMessage msg) {

        // TODO: replace with email notification / database persistence
        log.info("Contact form submission — name='{}', email='{}'", msg.name(), msg.email());

        return ResponseEntity.ok(Map.of(
                "status", "received",
                "message", "Thank you for reaching out. We will be in touch within 1–2 business days."
        ));
    }

    @GetMapping("/health")
    public ResponseEntity<Map<String, String>> health() {
        return ResponseEntity.ok(Map.of("status", "UP"));
    }
}
