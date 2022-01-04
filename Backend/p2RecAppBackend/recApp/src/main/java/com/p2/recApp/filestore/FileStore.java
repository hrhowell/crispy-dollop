package com.p2.recApp.filestore;

import java.io.IOException;
import java.io.InputStream;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.amazonaws.AmazonServiceException;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.model.ObjectMetadata;
import com.amazonaws.services.s3.model.S3Object;
import com.amazonaws.util.IOUtils;

/*************************************Works Cited*********************************************
 * Title: "Spring Boot Tutorial | Spring Boot Full Stack with React.js | Full Course | 2021"
 * Author: Nelson (amigoscode)
 * Date: 3/28/20 (Accessed 12/29/21)
 * Code Version: Java 15
 * Availability: https://youtu.be/i-hoSg8iRG0
 *********************************************************************************************/
@Service
public class FileStore {
	
	private final AmazonS3 s3;

	@Autowired
	public FileStore(AmazonS3 s3) {
		super();
		this.s3 = s3;
	}
	
	//the map part allows us to pass metadata from images and files
	public void save(
			String path,
			String fileName,
			Optional<Map<String, String>> optionalMetadata,
			InputStream inputStream) {
		
		ObjectMetadata metadata = new ObjectMetadata();
		optionalMetadata.ifPresent(map -> {
			if(!map.isEmpty()) {
				map.forEach(metadata:: addUserMetadata);
			}
		});
		try {
			s3.putObject(path, fileName, inputStream, metadata);
			
		}catch(AmazonServiceException e) {
			throw new IllegalStateException("failed to store image in s3", e);
		}
	}

	 public byte[] download(String path, String key) {
	        try {
	            S3Object object = s3.getObject(path, key);
	            return IOUtils.toByteArray(object.getObjectContent());
	        } catch (AmazonServiceException | IOException e) {
	            throw new IllegalStateException("Failed to download file to s3", e);
	        }
	
	
	 }
}
