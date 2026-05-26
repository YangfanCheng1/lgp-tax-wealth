package com.lgp.taxwealth.controller;

import com.lgp.taxwealth.model.ContactMessage;
import jakarta.validation.Valid;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api")
public class ContactController {

    private static final Logger log = LoggerFactory.getLogger(ContactController.class);

    private final JavaMailSender mailSender;

    @Value("${mail.notification.to}")
    private String notificationTo;

    @Value("${spring.mail.username}")
    private String mailFrom;

    public ContactController(JavaMailSender mailSender) {
        this.mailSender = mailSender;
    }

    @PostMapping("/contact")
    public ResponseEntity<Map<String, String>> submitContact(
            @Valid @RequestBody ContactMessage msg) {

        log.info("Contact form submission — name='{}', email='{}'", msg.name(), msg.email());

        try {
            SimpleMailMessage email = new SimpleMailMessage();
            email.setFrom(mailFrom);
            email.setTo(notificationTo);
            email.setReplyTo(msg.email());
            email.setSubject("New Contact Form Submission — " + msg.name());
            email.setText("""
                    You have a new contact form submission from lgptaxandwealth.com.

                    Name:    %s
                    Email:   %s

                    Message:
                    %s

                    ---
                    Reply directly to this email to respond to %s.
                    """.formatted(msg.name(), msg.email(), msg.message(), msg.name()));

            mailSender.send(email);
            log.info("Notification email sent to {}", notificationTo);
        } catch (Exception e) {
            log.error("Failed to send notification email: {}", e.getMessage());
        }

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
