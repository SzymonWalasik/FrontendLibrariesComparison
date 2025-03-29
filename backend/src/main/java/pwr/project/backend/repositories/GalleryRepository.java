package pwr.project.backend.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import pwr.project.backend.entities.GalleryEntity;

public interface GalleryRepository extends JpaRepository<GalleryEntity, Long> {
    GalleryEntity findByFilename(String filename);
}
