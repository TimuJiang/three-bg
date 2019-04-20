attribute float scale;
void main() {
    //modelViewMatrix 模型矩阵
    vec4 mvPosition = modelViewMatrix * vec4( position, 1.0 );
    gl_PointSize = scale * ( 300.0 / - mvPosition.z );
    gl_Position = projectionMatrix * mvPosition;
}
