@extends('admin._layoutNew')

@section('page-head')
    <style>
        .layui-form-label {
            width: 150px;
        }
        .layui-input-block {
            margin-left: 180px;
        }
    </style>
@endsection

@section('page-content')

    <form class="layui-form" action="">
        <div class="layui-form-item">
            <label class="layui-form-label">地址</label>
            <div class="layui-input-block">
                <input type="text" autocomplete="off" placeholder="" class="layui-input" value="{{$result->address}}" disabled>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">私钥</label>
            <div class="layui-input-block">
                <input type="text"  autocomplete="off" placeholder="" class="layui-input" value="{{$result->private}}" disabled>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">地址OMNI</label>
            <div class="layui-input-block">
                <input type="text" autocomplete="off" placeholder="" class="layui-input" value="{{$result->address_2}}" disabled>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">私钥OMNI</label>
            <div class="layui-input-block">
                <input type="text"  autocomplete="off" placeholder="" class="layui-input" value="{{$result->private_2}}" disabled>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">地址TRC</label>
            <div class="layui-input-block">
                <input type="text" autocomplete="off" placeholder="" class="layui-input" value="{{$result->address_3}}" disabled>
            </div>
        </div>
        <div class="layui-form-item">
            <label class="layui-form-label">私钥TRC</label>
            <div class="layui-input-block">
                <input type="text"  autocomplete="off" placeholder="" class="layui-input" value="{{$result->private_3}}" disabled>
            </div>
        </div>
    </form>

@endsection
