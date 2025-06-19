package com.example.backend.Mapper;

import com.example.backend.Dto.UserDto;
import com.example.backend.Model.User;
import org.mapstruct.Mapper;

import java.util.List;
@Mapper(componentModel = "spring")
public interface UserMapper {
    User toEntity(UserDto dto);
    UserDto toDto(User user);
    List<UserDto> toDtos(List<User> users);
}
