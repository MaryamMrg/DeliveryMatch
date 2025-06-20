package com.example.backend.Mapper;

import com.example.backend.Dto.RequestDto;
import com.example.backend.Model.Request;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

import java.util.List;

@Mapper(componentModel = "spring")
public interface RequestMapper {

    
    @Mapping(source = "ad.adId", target = "ad_id")
    @Mapping(source = "sender.userId", target = "sender_id")
    @Mapping(source = "pack.p_id", target = "packId")
    RequestDto toDto(Request request);

    @Mapping(target = "ad", ignore = true)
    @Mapping(target = "sender", ignore = true)
    @Mapping(target = "pack", ignore = true)
    @Mapping(target = "r_id", ignore = true)
    Request toEntity(RequestDto requestDto);

    List<RequestDto> toDtos(List<Request> reqs);
}