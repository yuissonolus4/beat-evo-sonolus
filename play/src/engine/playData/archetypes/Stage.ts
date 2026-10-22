export class Stage extends Archetype {
    spawnOrder() {
        return 1
    }

    shouldSpawn() {
        return entityInfos.get(0).state === EntityState.Despawned
    }

    updateParallel() {
        const rect = new Rect({
            l: screen.rect.l,
            r: screen.rect.r,
            b: -0.56,
            t: -0.50,
        })

        skin.sprites.judgeLine.draw(rect, [0], touches.count ? 1 : 0.65)
    }
}
