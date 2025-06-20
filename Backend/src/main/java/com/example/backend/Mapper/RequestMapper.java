package com.example.backend.Mapper;

import com.example.backend.Dto.AdDto;
import com.example.backend.Dto.RequestDto;
import com.example.backend.Model.Ad;
import com.example.backend.Model.Request;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface RequestMapper {

    Request toEntity(RequestDto RDto);

   RequestDto toDto(Request request);
    List<RequestDto> toDtos(List<Request> reqs);

}
