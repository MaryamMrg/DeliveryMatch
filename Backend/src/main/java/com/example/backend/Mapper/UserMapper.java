package com.example.backend.Mapper;

import com.example.backend.Dto.UserDto;
import com.example.backend.Model.User;

import java.util.List;

public interface UserMapper {
    User toEntity(UserDto dto);
    UserDto toDto(User user);
    List<UserDto> toDtos(List<User> users);
}
