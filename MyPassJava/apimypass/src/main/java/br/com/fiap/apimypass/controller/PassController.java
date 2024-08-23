package br.com.fiap.apimypass.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.web.bind.annotation.GetMapping;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import br.com.fiap.apimypass.model.Password;
import br.com.fiap.apimypass.repository.PasswordRepository;


@RestController
@RequestMapping("/pass")
public class PassController {

    @Autowired
    PasswordRepository repository;

    @GetMapping
    public List<Password> findAll(){
        return repository.findAll();
    }

  
}
