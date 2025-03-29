package pwr.project.backend.controllers;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import pwr.project.backend.entities.GalleryEntity;
import pwr.project.backend.services.GalleryService;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/gallery")
@CrossOrigin(origins = "*")
public class GalleryController {

    private final GalleryService galleryService;

    @Autowired
    public GalleryController(GalleryService galleryService) {
        this.galleryService = galleryService;
    }

    /**
     * 📌 Upload zdjęć (wiele plików)
     */
    @PostMapping("/upload")
    public ResponseEntity<String> uploadFile(@RequestParam("file") MultipartFile[] files) {
        String message = galleryService.uploadFiles(files);
        return ResponseEntity.ok(message);
    }

    /**
     * 📌 Pobranie listy wszystkich zdjęć
     */
    @GetMapping("/all")
    public ResponseEntity<List<GalleryEntity>> getAllFiles() {
        List<GalleryEntity> galleryEntities = galleryService.getAllFiles();
        return ResponseEntity.ok(galleryEntities);
    }

    /**
     * 📌 Usunięcie zdjęcia z bazy danych
     */
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteFile(@PathVariable Long id) {
        return ResponseEntity.ok(galleryService.deleteFile(id));
    }
}
