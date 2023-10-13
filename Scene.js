import * as GaussianSplat3D from './build/gaussian-splat-3d.module.js';

export class Scene {

    constructor() {
    }

    load() {
        const urlParams = new URLSearchParams(window.location.search);
        const name = urlParams.get('url');

        const plyLoader = new GaussianSplat3D.PlyLoader();
        plyLoader.loadFromFile(name)
        .then((splatBuffer) => {
            new GaussianSplat3D.SplatLoader(splatBuffer).saveToFile('converted_file.splat');
        });
        const viewer = new GaussianSplat3D.Viewer(null, [0, -1, 0], [-2, 1.96931,1.2], [0,0,0], 30);
        viewer.init();
        viewer.loadFile(name)
        .then(() => {
            viewer.start();
        });
    }
}