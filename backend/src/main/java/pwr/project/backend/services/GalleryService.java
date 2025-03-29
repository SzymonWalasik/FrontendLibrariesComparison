package pwr.project.backend.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import pwr.project.backend.entities.GalleryEntity;
import pwr.project.backend.repositories.GalleryRepository;

import java.io.IOException;
import java.util.List;

@Service
public class GalleryService {

    @Autowired
    private GalleryRepository galleryRepository;

    /**
     * 📌 Metoda do zapisywania plików w bazie danych
     */
    public String uploadFiles(MultipartFile[] files) {
        StringBuilder message = new StringBuilder();

        try {
            for (MultipartFile file : files) {
                GalleryEntity galleryEntity = new GalleryEntity();
                galleryEntity.setFilename(file.getOriginalFilename());
                galleryEntity.setFiletype(file.getContentType());
                galleryEntity.setContent(file.getBytes());

                galleryRepository.save(galleryEntity);
                message.append("Plik ").append(file.getOriginalFilename()).append(" zapisany do bazy.\n");
            }
            return message.toString();
        } catch (IOException e) {
            throw new RuntimeException("Błąd zapisu plików.", e);
        }
    }

    /**
     * 📌 Pobiera listę wszystkich zapisanych zdjęć z bazy danych
     */
    public List<GalleryEntity> getAllFiles() {
        return galleryRepository.findAll();
    }

    /**
     * 📌 Usuwanie pliku z bazy danych
     */
    public String deleteFile(Long id) {
        galleryRepository.deleteById(id);
        return "Plik o ID " + id + " usunięty z bazy danych.";
    }
}
