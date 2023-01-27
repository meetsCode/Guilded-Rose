<?php

declare(strict_types=1);

namespace GildedRose;

final class GildedRose
{
    const AGED_BRIE        = 'Aged Brie';
    const BACKSTAGE_PASSES = 'Backstage passes to a TAFKAL80ETC concert';
    const SULFURAS         = 'Sulfuras, Hand of Ragnaros';
    const MAX_QUALITY                = 50;

    /**
     * @param Item[] $items
     */
    public function __construct(
        private array $items
    ) {
    }

    public function updateQuality(): void
    {
        foreach ($this->items as $item) {
            if ($item->name != self::AGED_BRIE and $item->name != self::BACKSTAGE_PASSES) {
                if ($item->quality > 0) {
                    if ($item->name != self::SULFURAS) {
                        $item->quality = $item->quality - 1;
                    }
                }
            } else {
                if ($item->quality < self::MAX_QUALITY) {
                    $item->quality = $item->quality + 1;
                    if ($item->name == self::BACKSTAGE_PASSES) {
                        if ($item->sellIn < 11) {
                            if ($item->quality < self::MAX_QUALITY) {
                                $item->quality = $item->quality + 1;
                            }
                        }
                        if ($item->sellIn < 6) {
                            if ($item->quality < self::MAX_QUALITY) {
                                $item->quality = $item->quality + 1;
                            }
                        }
                    }
                }
            }

            if ($item->name != self::SULFURAS) {
                $item->sellIn = $item->sellIn - 1;
            }

            if ($item->sellIn < 0) {
                if ($item->name != self::AGED_BRIE) {
                    if ($item->name != self::BACKSTAGE_PASSES) {
                        if ($item->quality > 0) {
                            if ($item->name != self::SULFURAS) {
                                $item->quality = $item->quality - 1;
                            }
                        }
                    } else {
                        $item->quality = $item->quality - $item->quality;
                    }
                } else {
                    if ($item->quality < self::MAX_QUALITY) {
                        $item->quality = $item->quality + 1;
                    }
                }
            }
        }
    }
}
