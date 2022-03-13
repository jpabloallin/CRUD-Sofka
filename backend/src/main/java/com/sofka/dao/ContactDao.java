package com.sofka.dao;
//capa de persistencia
import com.sofka.domain.Contact;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ContactDao extends CrudRepository <Contact, Long> {

    @Modifying
    @Query("update Contact cont set cont.name = :name where cont.id = :id")
    public void updateName(
            @Param(value = "id") Long id,
            @Param(value = "name") String name
    );

    @Modifying
    @Query("update Contact cont set cont.email = :email where cont.id = :id")
    public void updateEmail(
            @Param(value = "id") Long id,
            @Param(value = "email") String email
    );

    @Modifying
    @Query("update Contact cont set cont.telephone = :telephone where cont.id = :id")
    public void updateTelephone(
            @Param(value = "id") Long id,
            @Param(value = "telephone") String telephone
    );

    @Modifying
    @Query("update Contact cont set cont.birthDay = :birthDay where cont.id = :id")
    public void updatebirthDay(
            @Param(value = "id") Long id,
            @Param(value = "birthDay") String birthDay
    );
}
