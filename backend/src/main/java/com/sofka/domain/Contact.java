package com.sofka.domain;

import lombok.Data;
import javax.persistence.Id;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Column;
import java.io.Serializable;

//capa de persistencia
@Data
@Entity
@Table(name = "contact")

public class Contact implements Serializable {
    private static  final  long serialVersionUID = 1L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "contact_id")
    private Long id;

    @Column(name = "contact_name")
    private String name;

    @Column(name = "contact_email")
    private String email;

    @Column(name = "contact_tel")
    private String telephone;

    @Column(name = "contact_date_birth")
    private String birthDay;
}

